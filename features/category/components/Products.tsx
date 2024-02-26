import React from "react";

import { Card } from "@/components/Card";

export function Products() {
  return (
    <div className="grid items-center gap-6 pb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(16)
        .fill(null)
        .map((_, i) => (
          <Card key={i} />
        ))}
    </div>
  );
}
