import Image from 'next/image'
import Link from 'next/link'
import { DropDown } from './dropdown'
import Products from './ui/productcards'
import { PriceSort } from './priceSort'
import Search from './search'
import { AddProduct } from './ui/buttons'





export default function Home({
  searchParams
}: {
  searchParams: {
    displayed: number;
    sortType: string;
    query: string;
  }
}) {


  const displayed = searchParams?.displayed || 10;
  const sortType = searchParams.sortType;
  const query = searchParams?.query || '';
  return (
    
    <main>
      <div className='header'>
        <Image src="/header.png" alt="1" width={200} height={20}/>
        </div>
      <div className="inline-flex gap-5">
      
     <DropDown />
     <PriceSort />
     <Search placeholder="Search products" />
     </div>
     <Products displayed={displayed} sortType={sortType} query={query} />
      <AddProduct />
     

     

    
    
     
    </main>
  )
}
