'use client'
import Link from 'next/link';
 import {
  CurrencyEuroIcon,
  LinkIcon,
  CpuChipIcon,
  DocumentTextIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'; 
import { Button } from '@/app/_components/button';
import { editProduct } from '@/app/lib/actions';
import { Product, ProductField } from '../lib/definitions';
import { fetchProductsNoFilter } from '../lib/data';


export default function EditForm({
    product,
    
}: {product: Product
    }) {

  const editProductWithId  = editProduct.bind(null, product.id)
  
  return (
    <form action={editProductWithId}>
      <div className="rounded-md bg-gray-500 p-4 md:p-6 text-black">
        
        {/* Title*/}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Enter product title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="string"
                placeholder="Enter title"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 text-black placeholder:text-gray-500"
                defaultValue={product.title}
                
              />
              {<CpuChipIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
            </div>
           
          </div>
        </div>
        {/* Category*/}
        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Enter product category
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="category"
                name="category"
                type="string"
                placeholder="Enter category"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 text-black placeholder:text-gray-500"
                defaultValue={product.category}
                
              />
              {<CpuChipIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
            </div>
           
          </div>
        </div>


        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Enter product price
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="Enter price"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 text-black placeholder:text-gray-500"
                defaultValue={product.price}
                
              />
              {<CurrencyEuroIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
            </div>
            
          </div>
        </div>

        {/* Description */}
        
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Enter product description
          </label>
          <div className="relative">
          <input
                id="description"
                name="description"
                type="string"
                placeholder="Enter product description"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 text-black placeholder:text-gray-500"
                defaultValue={product.description}
                
              />
              
              
              
            
           { <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> }
          </div>
         
        </div>

        {/* Image */}
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Insert image URL
          </label>
          <div className="relative">
          <input
                id="image"
                name="image"
                type="text"
                placeholder="Enter URL"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 text-black placeholder:text-gray-500"
                defaultValue={product.image}
                
              />
              
              
              
            
           { <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> }
          </div>
          
        </div>
        
        
      </div>
      
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/#"
          className="flex h-10 items-center rounded-lg bg-gray-300 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-400"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Product</Button>
      </div>
    </form>
  );
}
