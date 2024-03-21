import { fetchProductById } from '../lib/data'
import { CurrencyEuroIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import ImageWithFallBack from '../imageWithFallBack';
import { Button } from '../button';
import Accordion, { AccordionBody, AccordionHeader } from '@material-tailwind/react/components/Accordion';
import type { AccordionProps } from "@material-tailwind/react";
import { DefaultAccordion } from './accordion';


export default async function ProductDetails({id}: {
    id: string
})  {
    const product = await fetchProductById(id);
    
    
  return (
    <>
    <main className='flex w-[900px] justify-center mt-20 text-black'>
    
      <div className='w-full flex flex-col md:flex-row md:justify-between mdL:space-x-10 items-center'>
       <div className='relative'>
         <ImageWithFallBack src={product.image} fallbackSrc={"/image-not-found-icon.webp"} width={400} height={400} />
       </div>
       <div className='space-y-5 p-5'>
          <h1 className='text-2xl font-bold'>{product.title}</h1>
          <h3 className='text-lg font-semibold'>{product.description}</h3>
          <h2 className='inline-flex text-xl font-bold'><CurrencyEuroIcon height={28} width={28} />{product.price}</h2>

          <div className='space-y-10'>
       <Button ><ShoppingCartIcon className='h-8 w-8'/>Add to Cart</Button>
       </div>
       </div>
         



       
       </div>

        {/* accordion test */}

        
    
    </main>
    <DefaultAccordion />
    </>
  )
}

 