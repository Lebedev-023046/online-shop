import { NextResponse } from "next/server";

import { hashPassword } from "@/features/auth/utils/hashPassword";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  // console.log("REQUEST: ", request);
  const customers = await prisma.user.findMany();

  // console.log("customers: ", customers);
  return new NextResponse(JSON.stringify(customers), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  console.log("name: ", name);

  // console.log("REQUEST: ", request);
  const newCustomer = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword(password),
      image: "",
    },
  });

  // console.log("customers: ", customers);
  return new NextResponse(JSON.stringify(newCustomer), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
