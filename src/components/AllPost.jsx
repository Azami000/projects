import React from "react";
import { IsCard } from "./IsCard";

export const AllPost = async () => {
  const result = await fetch("https://dev.to/api/articles");
  const obResult = await result.json();
  return (
    <div className="flex w-[1216px] flex-col gap-5">
      <div className="flex  gap-8"></div>
      <div className="flex font-bold">All Blog Post</div>
      <div className="flex flex-row gap-7.5 justify-between">
        <div className="flex gap-5">
          <div>All</div>
          <div>Design</div>
          <div>Travel</div>
          <div>Fashion</div>
          <div>Branding</div>
        </div>
        <div>View All</div>
      </div>
      <IsCard blogs={obResult} />
    </div>
  );
};
