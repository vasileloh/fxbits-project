import { fetchProductById } from '@/app/lib/data'
import ProductDetails from '@/app/ui/product-details'



export default async function Page  ({
  params
}: {params: {
  id:string
} })  {
  
  
  const id = params.id;
  
 
  return (
    
    <main>
      
       <ProductDetails id={id} />
       
    </main>
  )
}

