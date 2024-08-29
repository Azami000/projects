"use client";

import Link from "next/link";
import { useState } from "react";

export const IsCard = ({ blogs }) => {
 

  const [multiple, setMultiple] = useState(1);
  const [posts, setPosts] = useState(9 * multiple);

  return (
    <div className=" flex flex-wrap w-[1296px] mb-[100px] gap-[90px]  h-[880px] ">
      {blogs
        .slice(0, posts)
        .map(({ id, cover_image, title, tag_list, published_at }, index) => {
          return (
            <Link href={`/list/${id}`}>
              <div
                className="border w-[350px] rounded-xl p-4 gap-4 bg-white"
                key={index}
              >
                <img
                  src={cover_image}
                  alt=""
                  className="w-[360px] h-[240px] gap-1.5 rounded-md"
                />
                <div className="flex flex-col p-2 gap-5">
                  <div className="w-[97px] rounded-md py-1 px-5 gap-1 text-blue-400 bg-gray-200">
                    {tag_list[0]}
                  </div>
                  <div className=" flex font-semibold gap-4">
                    <div>{title}</div>
                  </div>
                  <div>{published_at}</div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};
