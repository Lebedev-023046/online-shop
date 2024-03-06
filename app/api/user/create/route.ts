import sha256 from "crypto-js/sha256";
import { NextResponse } from "next/server";

import { logger } from "@/lib/logger";
import prisma from "@/lib/prisma";

const hashPassword = (password: string) => {
  return sha256(password).toString();
};

export async function POST(req: Request) {
  const formData = await req.json();

  // delete 'accept-terms' field from formData object
  const { "accept-terms": _, ...body } = formData;
  logger.debug("creating user", {
    ...body,
    password: hashPassword(body.password),
  });
  const newUser = await prisma.user.create({
    data: { ...body, password: hashPassword(body.password) },
  });

  const { id, name } = newUser;

  return NextResponse.json(JSON.stringify({ id, name }), { status: 200 });
}
