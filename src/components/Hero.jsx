"use client";
import { Technology } from "@/components/Technology";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center relative justify-center bg-gray-100 w-[1216px] h-[600px] border">
        <img
          src="/Image.png"
          alt=""
          className="flex w-full h-full object-cover "
        />

        <div className="flex flex-col absolute bottom-3 left-3 bg-red-400 w-[598px] gap-6 p-10 rounded-xl">
          <div className=" flex flex=col gap-4">
            <Technology text="Technology" />
          </div>
          <div className="font-semibold">
            Grid system for better <br /> Design User Interface
          </div>
          <div className="gap-5 text-gray-400 font-normal">August 20, 2022</div>
        </div>
      </div>
      <div className="flex flex-end justify-end gap-4 pt-4">
        <button>
          <img src="/back.png" alt="" className="w-[40px] h-[40px]" />
        </button>
        <button>
          <img src="/forward.png" alt="" className="w-[40px] h-[40px]" />
        </button>
      </div>
    </div>
  );
};
