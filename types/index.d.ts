import { User } from "next-auth";

import { Product } from "@/prisma/generated";

export interface IUserResponse {
  success: User;
  error: string;
}

export interface IProductPreview {
  productPreviews: Product[][];
}
