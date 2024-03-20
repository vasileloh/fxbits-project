import  { fetchProducts}  from '@/app/lib/data';
import { Button } from '../button';
import ImageWithFallBack from '../imageWithFallBack';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';



 
export default async function Products({
   displayed,
   sortType,
   query,
   currentPage,
}: { 
  displayed: number;
  sortType: string;
  query: string;
  currentPage: number
}) {
    const products = await fetchProducts(displayed, query, currentPage);
    
   
    
return (
<>   



       
<div className='grid grid-cols-5 gap-3 w-[900px]'>
          {products?.sort((a,b) => {
               if (sortType == "Price High to Low") {
               return b.price - a.price }
               return a.price - b.price;
})
            .map( element => (
            
               
            
            
        
                <div className="flex flex-col w-[154px] h-[400px] bg-gray-50 border border-gray-200 rounded-lg shadow dark:border-gray-700   hover:bg-gray-300" key={element.id}>
                   <nav>
                    <a href={`/details/${element.id}`}>
                        <ImageWithFallBack className="m-3 object-fill rounded-t-lg shadow-2xl "  src={element.image} fallbackSrc={"/image-not-found-icon.webp"}
                             alt="" height={130} width={130}
                             />
                        
                        
                    </a>
                    
                    <div className="flex-2 grid p-5">   
                      <a href={`/details/${element.id}`}>
                         <h5 className="mb-2 text-lg font-bold line-clamp-3 text-gray-900 dark:text-gray-600 hover:underline hover:line-clamp-none">{element.title}</h5>
                      </a>
                                                  
                    </div>
                    </nav>
                    <div className="flex flex-col p-5">
                        <h6 className="inline-flex mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-600">{element.price/100} EUR</h6>
                        
                        <Button ><ShoppingCartIcon className='h-8 w-8'/>Add to Cart</Button>
                    </div>
                    
                </div>
                
                        
                    
                        
                
                    
                    
                  
          )
            
     )}
     </div>   
     
     
    
     </>   
     )
}