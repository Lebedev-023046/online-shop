import React from "react";

import { ContentRaw } from "./ContentRaw";

export function ContentRaws() {
  return (
    <div className="mx-auto w-[95%]">
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <ContentRaw key={i} />
        ))}
    </div>
  );
}
