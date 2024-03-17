import { $Enums } from "@/prisma/generated";

export type OptionType = {
  value: $Enums.Size | string;
  label: $Enums.Size | string;
};
