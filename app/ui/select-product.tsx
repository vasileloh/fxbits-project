'use client'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { ProductField } from '../lib/definitions'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function  SelectProduct  ( { products }: {
    products: ProductField[];
})  {


  const pathName = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  

   // const [option, setOption] =  useState('87f9069b-0c85-4913-a1f0-01b7bf4155d6');
    //let id: string = ''
    //const handleChange = (selectedOption: any) => {
      //const option = selectedOption;
       //id = option.toString()
      
    //}
     //id = option.toString();

    /////////////////////////////


    const param  = new URLSearchParams(searchParams)
    const handleChange = ((selectedOption: any) => {
     
    
    
    param.set('id', selectedOption)
    replace(`${pathName}?${param.toString()}`)
    //console.log(selectedOption)
   }) 
    //const id = option.toString()
    //const product = await fetchProductById(id);
  console.log('param=' + param.toString())
  return (
    <>
    <div className="rounded-md bg-gray-500 p-4 md:p-6 text-black">
         {/* Product */}
         <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose product
          </label>
          <div className="relative">
            <select
              id="id"
              name="id"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
             
              onChange = {(event) =>(
                handleChange(event.target.value)
              )
                

              }
              
            >
              <option value="" disabled>
                Select a product
              </option>
              {products.map((products) => (
                <option key={products.id} value={products.id}>
                  {products.title}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        </div>
       
        </>
  )
}

