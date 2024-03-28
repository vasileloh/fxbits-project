
import Products from './ui/product-cards'
import { PriceSort } from './ui/priceSort'
import { AddProduct, EditProduct } from './ui/buttons'
import { fetchProductPages } from './lib/data'
import Pagination from './ui/pagination'
import DropDown from './ui/dropdown'








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
      
     <div className='pt-16'>
      
          <ul className='flex justify-center gap-32 '>
              <DropDown />
              <PriceSort />
              <AddProduct />
              <EditProduct />
            </ul>
            
          <div className='flex justify-center'>
              <Products displayed={displayed} sortType={sortType} query={query} currentPage={currentPage} />
          </div>

          <div className='flex justify-center'>
              <Pagination totalPages={totalPages} />
          </div>
     </div>
     

     

    
    
     
    </main>
  )
}
