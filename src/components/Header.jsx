import {
  ArrowLeftIcon,
  HeartIcon as FilledHeart,
} from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Header() {
  return (
    <div className="w-full inset-0 flex justify-between items-center px-5 h-16  fixed">
      <ArrowLeftIcon className="h-6 w-6" />
      <div>
        <FilledHeart className="h-6 w-6 hidden cursor-pointer" />
        <HeartIcon className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
}
