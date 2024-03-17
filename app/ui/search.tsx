'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '@material-tailwind/react';

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
   replace(`${"/"}?${params.toString()}`);
  }, 300)
  
  return (
    <>
     
    { <div className=' h-10 w-[213px] text-gray-500 rounded-lg'>
    <Input
    
     label={placeholder}
     onChange={(e) => {
      handleSearch(e.target.value);
      } }
    defaultValue={searchParams.get('query')?.toString()} crossOrigin={undefined}
    className='bg-white rounded-full'
    icon={<MagnifyingGlassIcon/>}
    />
    </div> }
    {/* <div className="flex justify-center ">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-[213px] rounded-full border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-black placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      { <MagnifyingGlassIcon className="relative left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> }
      </div> */}
    </>
  );
}
