import Image from 'next/image'
import Link from 'next/link'
import Products from '../ui/productcards'
import { DropDown } from '../dropdown'



export default function Page  ({
  searchParams
}: {searchParams?: {
  displayed?:number
} })  {
  
  
  const displayed = searchParams?.displayed || 10;
  console.log(searchParams)
  return (
    
    <main>
      
    
     <DropDown />
   
     
     
    </main>
  )
}

