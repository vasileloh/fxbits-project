import Image from 'next/image'
import Link from 'next/link'
import Products from '../../ui/product-cards'
import { DropDown } from '../../ui/dropdown'
import { fetchProductById } from '@/app/lib/data'
import ProductDetails from '@/app/ui/product-details'
import ImageWithFallBack from '@/app/imageWithFallBack'
import { CurrencyEuroIcon } from '@heroicons/react/24/outline'
import { ThemeProvider } from '@material-tailwind/react'



export default async function Page  ({
  params
}: {params: {
  id:string
} })  {
  
  
  const id = params.id;
  const product = await fetchProductById(id);
 
  return (
    
    <main>
      
       <ProductDetails id={id} />
       
    </main>
  )
}

