"use client";
import React from "react";
import { Card } from "./Card";

export const Trending = () => {
  return (
    <div className="gap-7.5">
      <div className="flex font-bold gap-8 text-black">Trending</div>
      <div className="gap-5">
        <Card />
      </div>
    </div>
  );
};
