'use client'
import Link from 'next/link';
 import {
  CurrencyEuroIcon,
  LinkIcon,
  CpuChipIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'; 
import { Button } from '@/app/_components/button';
import { addProduct } from '@/app/lib/actions';
import { useFormState } from 'react-dom';


export default function AddForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(addProduct, initialState);
  console.log(state.errors?.title);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-500 p-4 md:p-6">
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
                aria-describedby="title-error"
                
              />
              {<CpuChipIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
            </div>
           
          </div>
          <div id="title-error" aria-live="polite" aria-atomic="true">
            {state.errors?.title && 
            state.errors.title.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key="error">
                {error}
              </p>
            ))}
          </div>
        </div>
        {/* Category*/}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
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
                aria-describedby="category-error"
                
              />
              {<CpuChipIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
            </div>
            <div id="category-error" aria-live="polite" aria-atomic="true">
            {state.errors?.category && 
            state.errors.category.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key="error">
                {error}
              </p>
            ))}
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
                aria-describedby="price-error"
                
              />
              {<CurrencyEuroIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
            </div>
            <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price && 
            state.errors.price.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key="error">
                {error}
              </p>
            ))}
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
               aria-describedby="description-error"
                
              />
              
              
              
            
           { <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> }
          </div>
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {state.errors?.description && 
            state.errors.description.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key="error">
                {error}
              </p>
            ))}
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
                aria-describedby="image-error"
                
              />
              
              
              
            
           { <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> }
          </div>
          <div id="image-error" aria-live="polite" aria-atomic="true">
            {state.errors?.image && 
            state.errors.image.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key="error">
                {error}
              </p>
            ))}
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
        <Button type="submit">Add Product</Button>
      </div>
    </form>
  );
}
