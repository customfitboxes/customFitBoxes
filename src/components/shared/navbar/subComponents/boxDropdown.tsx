"use client";

import { getSlug } from "@/services/categoriesService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BoxDropdown = (props: any) => {
  const router = useRouter();
  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = props.list.filter((_d: any, i: any) => i < 10);
    setList(arr);
  }, []);
  return (
    <div
      onMouseEnter={() => props.setShowDropdown(true)}
    //   onMouseLeave={() => props.setShowDropdown(false)}
      className="absolute w-60 top-full left-0 right-0 bg-white z-50 rounded-lg shadow-lg mt-2"
    >
      <div className="flex flex-col">
        {list &&
          list.length > 0 &&
          list.map((item: any, index: any) => (
            <div
              onClick={() => router.push(`/${getSlug(item.slug)}`)}
              key={index + 1}
              className={`flex items-center gap-x-3 cursor-pointer hover:font-bold text-zinc-700 hover:text-black py-3 px-3 ${
                (index !== list.length - 1) ? "border-b" : ""
              }`}
            >
              <h2 className="text-xs sm:text-sm fw_400">
                {item.name}
              </h2>
            </div>
          ))}
        {/* <div
          onClick={() => router.push("/all-categories")}
          className="flex items-center gap-x-3 cursor-pointer text-black rounded-lg justify-center px-2 h-12 sm:h-14 md:h-16 bg-zinc-100 hover:scale-95 duration-300"
        >
          <h2 className="text-xs sm:text-sm md:text-base fw_600 text-black">
            Show All
          </h2>
          <Image
            src={chev}
            alt=""
            width={16}
            height={16}
            style={{ transform: "rotate(-90deg)" }}
          />
        </div> */}
      </div>
    </div>
  );
};
export default BoxDropdown;
