"use client";

import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";

const routers = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];
export const Header = () => {
  const { push } = useRouter();

  const handleRouter = (href) => {
    push(href);
  };
  return (
    <div className="flex flex-row items-center justify-center py-8 px-80 gap-2">
      <div className="flex gap-28">
        <div className="flex flex-row w-[158px] h-[36px] items-center">
          <img src="/Union.png" alt="" className="w-[36px] h-[36px]" />
          <img
            src="/Meta.png"
            alt=""
            className="w-[55.25px] h-[18.58px] top-[9.53px] left-[45px]"
          />
          <img
            src="/Blog.png"
            alt=""
            className="w-[55.25px] h-[18.58px] top-[9.24px]left-[105.41px]"
          />
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-10">
            {routers.map(({ href, title }) => (
              <button key={title} onClick={() => handleRouter(href)}>
                {title}
              </button>
            ))}
          </div>
          <div className="flex border relative bg-gray-500">
            <input type="text" placeholder="Search" className="flex p-2" />
            <IoIosSearch className=" flex w-4 h-4 absolute right-2 top-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
