import React from "react";

export default function page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // console.log("SEARCH_PARAMS: ", searchParams);
  return <div>page</div>;
}
