import Image from 'next/image'
import Link from 'next/link'
import Products from '../../ui/product-cards'
import { DropDown } from '../../dropdown'
import { fetchProductById } from '@/app/lib/data'
import ProductDetails from '@/app/ui/product-details'



export default function Page  ({
  params
}: {params: {
  id:string
} })  {
  
  
  const id = params.id;
  const product = fetchProductById(id);
 
  return (
    
    <main>
      
    
     <ProductDetails id={id} />
   
     
     
    </main>
  )
}

