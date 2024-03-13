'use client' 
import React, { useState } from "react";
import Products from "./ui/product-cards";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from 'next/link';

export const  PriceSort =  () => {
    const pathName = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    

        const options = [
    
            { label: "ASC"},
         
            { label: "DESC"},
         
            
         
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
              
              
              param.set('sortType', selectedOption)
              replace(`${pathName}?${param.toString()}`)
              
              })
              
              
          
          
   
         
       
        
      return (
        <>
        
        <label className="inline-flex">
      
        
        <h1>Price</h1>
        <select className=" dark:bg-gray-800" defaultValue={'Price Low to High'} onChange={(e) => {
          handleChange(e.target.value)
        }}
           >
            {options.map((option: {label: string }) => (

             <option className="dark:bg-gray-800" key={option.label} value={option.label} >{option.label}</option>

            ))}

        </select>    
        
    </label>
   
   
    </>
      ) 

}