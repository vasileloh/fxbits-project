'use client'
import React, { useState } from "react";
import Products from "./product-cards";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from 'next/link';
import {Select, Option} from "@material-tailwind/react"






export const  DropDown = () =>  {
    
    const pathName = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    

        const options = [
    
            { label: "5"},
         
            { label: "20"},
         
            
         
          ];
    
    
          //const [value, setValue] = useState(10);

          /*
          const handleChange = (event: any) => {
              const param  = new URLSearchParams(searchParams)
              param.set('value', value.toString())
              setValue(event.target.value);
              replace(`${pathName}?${param.toString()}`)
              console.log(param)'
              */
              
              const handleChange = ((selectedOption: any) => {
                const param  = new URLSearchParams(searchParams)
              
              
              param.set('displayed', selectedOption)
              replace(`${pathName}?${param.toString()}`)
              
              })
              
              
          
          
   
         
       
        
      return (
        <>
        <div className="flex flex-row h-10 w-26 mt-4 mb-2 text-black">
        
        <Select 
              label="Products per Page"
              placeholder={10} 
              onChange={(e) => {
                handleChange(e);
              } }
              className="bg-white"
                         >
            {options.map((option: {label: string }) => (
              
             <Option key={option.label} value={option.label} className="flex items-center gap-2" > {option.label}</Option>

            ))}

        </Select>    
        
        
   </div>
   
    </>
      ) 
    };

    

    


    
   