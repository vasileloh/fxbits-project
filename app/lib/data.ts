
import { Post }  from './definitions'



 export  async function fetchProducts() {
    const ff_url = 'https://fakestoreapi.com/products';
   

   const res = await fetch(ff_url);
   const products: Post[] = await res.json();

     return products;

 }


 

 