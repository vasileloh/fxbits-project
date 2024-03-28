
import { Component, Suspense } from 'react';
import EditForm from '../ui/edit-product-form';
import { Product } from '../lib/definitions';
import { fetchProductById, fetchProducts, fetchProductsNoFilter } from '@/app/lib/data';
import { Select } from '@material-tailwind/react';
import SelectProduct from '../ui/select-product';
import SelectedProduct from '../ui/SelectedProduct';


export default async function Page({
    searchParams
}: { searchParams: {id: string}}) {
   
  const id = searchParams?.id;
  const products = await fetchProductsNoFilter();
  const product = await fetchProductById(id);
  console.log(id)
    
   
    return (
        <main className='pt-16'>
             
              <SelectProduct products = {products} />
             {id && <EditForm product={product} /> }
              
             </main>
    );
}