import Image from 'next/image'
import Link from 'next/link'
import { DropDown } from './dropdown'
import Products from './ui/productcards'
import { PriceSort } from './priceSort'





export default function Home({
  searchParams
}: {
  searchParams: {
    displayed: number
    sortType: string
  }
}) {


  const displayed = searchParams.displayed;
  const sortType = searchParams.sortType;
  return (
    
    <main>
      <div className='header'>
        <Image src="/header.png" alt="1" width={200} height={20}/>
        </div>
      <div className="inline-flex gap-5">
      
     <DropDown />
     <PriceSort />
     </div>
     <Products displayed={displayed} sortType={sortType} />

     

     

    
    
     
    </main>
  )
}
