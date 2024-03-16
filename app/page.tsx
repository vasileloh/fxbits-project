

import Image from 'next/image'
import Link from 'next/link'
import { DropDown } from './ui/dropdown'
import Products from './ui/product-cards'
import { PriceSort } from './ui/priceSort'
import Search from './ui/search'
import { AddProduct } from './ui/buttons'
import { fetchProductPages } from './lib/data'
import Pagination from './ui/pagination'






export default async function Home({
  searchParams
}: {
  searchParams: {
    displayed: number;
    sortType: string;
    query: string;
    page: number
  }
}) {


  const displayed = searchParams?.displayed || 10;
  const sortType = searchParams?.sortType || "ASC";
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductPages(query, displayed);
  return (
    
    <main>
      <div className='header'>
        <Image src="/header.png" alt="1" width={200} height={20}/>
        </div>
      <div className="inline-flex gap-5">
      
     {<DropDown />}
     <PriceSort />
     <Search placeholder="Search products" />
     </div>
     <Products displayed={displayed} sortType={sortType} query={query} currentPage={currentPage} />
      <Pagination totalPages={totalPages} />
      <AddProduct />
     

     

    
    
     
    </main>
  )
}
