"use client";

import { Option, Select as TWSelect } from "@material-tailwind/react";
import React from "react";

interface Props {
  options: string[];
}

export function Select({ options }: Props) {
  return (
    <TWSelect placeholder="">
      {options.map((size, i) => (
        <Option value={size} key={i}>
          {size}
        </Option>
      ))}
    </TWSelect>
  );
}
