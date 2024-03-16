'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input, Textarea } from '@material-tailwind/react';

export default function Search({ placeholder }: { placeholder: string }) {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  
    const handleSearch = useDebouncedCallback((term) => {
    console.log(term);
    console.log(`Searching... ${term}`);


   const params  = new URLSearchParams(searchParams);
   params.set('page', '1');
   if (term) {
    params.set('query', term);
   } else {
    params.delete('query');
   }
   replace(`${pathname}?${params.toString()}`);
  }, 300)
  
  return (
    <>
     
    <div className='flex flex-row h-10 w-72 mt-4 mb-2 text-gray-500'>
    <Input
     label={placeholder}
     onChange={(e) => {
      handleSearch(e.target.value);
      } }
    defaultValue={searchParams.get('query')?.toString()} crossOrigin={undefined}
    className='bg-white'
    />
     </div>
    {/* <div className="relative flex flex-1 flex-shrink-0 mt-4 mb-2">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-black placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      { <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> }
      </div> */}
    </>
  );
}
