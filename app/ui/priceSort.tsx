"use client";
import React, { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const PriceSort = () => {
  const pathName = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const options = [
    { label: "Price Low to High" },

    { label: "Price High to Low" },
  ];

  const handleChange = (selectedOption: any) => {
    const param = new URLSearchParams(searchParams);

    param.set("sortType", selectedOption);
    replace(`${pathName}?${param.toString()}`);
    console.log(selectedOption);
  };

  return (
    <>
      <div className="relative h-10 w-[214px] mt-4 mb-2">
        <select
          onChange={(e) => handleChange(e.target.value)}
          className="bg-white pper h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-400 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        >
          {options.map((option: { label: string }) => (
            <option
              key={option.label}
              value={option.label}
              className="flex items-center gap-2"
            >
              {" "}
              {option.label}
            </option>
          ))}
        </select>
        <label className="text-blue-gray-700 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Sort
        </label>
      </div>
    </>
  );
};
