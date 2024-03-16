
import  Image  from 'next/image';
import  { fetchProducts}  from '@/app/lib/data';
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { Button } from './button';
import Link from 'next/link';
import Breadcrumbs from './breadcrumbs';
import { min } from '@material-tailwind/react/types/components/slider';


 
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


{/*
<label>
    <h1>Produse Afisate</h1>
    <select className=" dark:bg-gray-800" value={value} onChange={handleChange}>
        {options.map((option: { value:  number; label: string }) => (

         <option className="dark:bg-gray-800" value={option.value} key={option.value}>{option.label}</option>

        ))}

    </select>      
</label>
        */}
       
<div className='grid grid-cols-5 gap-3'>
          {products?.sort((a,b) => {
               if (sortType == "Price High to Low") {
               return b.price - a.price }
               return a.price - b.price;
})
            .map( element => (
            
               
            
            
        
                <div className=" flex flex-1 flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700   hover:bg-gray-400" key={element.id}>
                   <nav>
                    <a href={`/details/${element.id}`}>
                        <Image className="mx-3 my-3 object-fill rounded-t-lg shadow-2xl "  src={element.image} 
                             alt="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/image-not-found-icon.png" height={150} width={150} />
                        
                        
                    </a>
                    
                    <div className="grid p-5">
                        
                        
                       
                            
                            <a href={`/details/${element.id}`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-600 hover:underline">{element.title}</h5>
                            </a>
                           
                         
                        
                      
                       
                    </div>
                    </nav>
                    <div className="flex flex-col p-5 justify-around">
                        <h6 className="inline-flex mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-600">{element.price/100} RON</h6>
                        
                        <Button >Add to Cart</Button>
                    </div>
                    
                </div>
                
                        
                    
                        
                
                    
                    
                  
          )
            
     )}
     </div>   
     
     
    
     </>   
     )
}