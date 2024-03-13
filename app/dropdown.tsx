'use client'
import React, { useState } from "react";
import Products from "./ui/product-cards";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from 'next/link';





export const  DropDown = () =>  {
    
    const pathName = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    

        const options = [
    
            { label: "10", displayed: 10},
         
            { label: "20", displayed: 20},
         
            
         
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
        
        <label className="inline-flex">
      
        
        
        <select className=" dark:bg-gray-800" defaultValue={10} onChange={(e) => {
          handleChange(e.target.value)
        }}
           >
            {options.map((option: {displayed: number }) => (

             <option className="dark:bg-gray-800" key={option.displayed} value={option.displayed} >Products per page{option.displayed}</option>

            ))}

        </select>    
        
    </label>
   
   
    </>
      ) 
    };

    

    


    
   