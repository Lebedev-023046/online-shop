import sha256 from "crypto-js/sha256";
import { NextResponse } from "next/server";

import { logger } from "@/lib/logger";
import prisma from "@/lib/prisma";

const hashPassword = (password: string) => {
  return sha256(password).toString();
};

export async function POST(req: Request) {
  const { username: email, password } = await req.json();

  console.log({ email, password });

  const user = await prisma.user.findFirst({
    where: { email },
  });

  console.log({ user });

  logger.debug("finding user", user);

  if (!user) {
    logger.debug("user not found");
    return new Response(JSON.stringify({ error: "Пользователь не найден" }), {
      status: 401,
    });
  } else {
    if (user.password !== hashPassword(password) || user.email !== email) {
      logger.debug("incorrect credentials");
      return new Response(
        JSON.stringify({ error: "Неверный логин или пароль" }),
        { status: 401 },
      );
    } else {
      logger.debug("correct credentials");
      return new Response(JSON.stringify(user), {
        status: 200,
      });
    }
  }
}
