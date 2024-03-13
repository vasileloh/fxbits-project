import React from 'react'
import { fetchProductById } from '../lib/data'
import Image from 'next/image';

export default async function ProductDetails({id}: {
    id: string
})  {
    const product = await fetchProductById(id);

  return (
    <main>
        <div className='flex'>
            <div className='flex'>
               
                <Image className="object-fill rounded-t-lg" src={product.image} alt="" height={1000} width={200} />
                
            </div> 
            <div className='flex-col content-around'>
                <div className=''>{product.title}</div>
                <div className=''>{product.description}</div>
                <div className=''>{product.price}</div>
            </div>
        </div>
    </main>
  )
}

 