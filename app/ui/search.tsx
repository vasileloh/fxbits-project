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
     
     <div className=' h-10 w-[213px] text-gray-500'>
    <Input
    
     label={placeholder}
     onChange={(e) => {
      handleSearch(e.target.value);
      } }
    defaultValue={searchParams.get('query')?.toString()} crossOrigin={undefined}
    className='bg-white'
    icon={<MagnifyingGlassIcon/>}
    />
    </div> 
  
    </>
  );
}
