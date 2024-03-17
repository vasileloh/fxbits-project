'use client'
import React, { useState } from "react";
import Products from "./product-cards";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import {Select, Option} from "@material-tailwind/react"






export const  DropDown = () =>  {
    
    const pathName = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    

        const options = [
    
            { label: "10"},
         
            { label: "20"},
         
            
         
          ];
    
    
          
              const handleChange = ((selectedOption: any) => {
                const param  = new URLSearchParams(searchParams)
              
              param.set('page', '1');
              param.set('displayed', selectedOption);
              replace(`${pathName}?${param.toString()}`)
              console.log(selectedOption)
              })
              
              
          
          
   
         
       
        
      return (
        <>
        <div className=" flex h-10 w-[214px] pt-4 pb-2">
        
        <Select 
              label="Products per Page"
              placeholder={10} 
              onChange={(e) => {
                handleChange(e);
              } }
              className=" bg-white"
                         >
            {options.map((option: {label: string }) => (
              
             <Option key={option.label} value={option.label} className="flex items-center gap-2" > {option.label}</Option>

            ))}

        </Select>    
        
        
   </div>
   
    </>
      ) 
    };

    

    


    
   