
import {  Product }  from './definitions'
import { sql } from '@vercel/postgres';
import { unstable_noStore } from 'next/cache';



 /* export  async function fetchProducts() {
    const ff_url = 'https://fakestoreapi.com/products';
   

   const res = await fetch(ff_url);
   const products: Post[] = await res.json();

     return products;

 } */

export async function fetchProducts() {
  unstable_noStore();
  try {
    const data = await sql<Product>`
    SELECT products.id,products.title, products.price, products.description, products.image
    FROM products
    ORDER BY products.price ASC
    LIMIT 10`;

    const products = data.rows.map((product) => ({
      ...product
    }));
    return products;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch products.");
  }

};



 

 