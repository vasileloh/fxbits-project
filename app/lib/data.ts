
import {  Product, ProductField }  from './definitions'
import { sql } from '@vercel/postgres';
import { unstable_noStore } from 'next/cache';



 /* export  async function fetchProducts() {
    const ff_url = 'https://fakestoreapi.com/products';
   

   const res = await fetch(ff_url);
   const products: Post[] = await res.json();

     return products;

 } */

export async function fetchProducts(
  displayed: number,
  query: string,
  currentPage: number,
  ) {
    const itemsPerPage = displayed;
    const offset = (currentPage - 1) * itemsPerPage;
    
  unstable_noStore();
  try {
    const data = await sql<Product>`
    SELECT products.id, products.title, products.category, products.price, products.description, products.image
    FROM products
    WHERE 
      products.title ILIKE ${`%${query}%`}
    ORDER BY products.price ASC
    LIMIT ${itemsPerPage} OFFSET ${offset}`;

    const products = data.rows.map((product) => ({
      ...product,
      price: product.price / 100
    }));
    return products;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch products.");
  }

};



export async function fetchProductById(id: string) {
  unstable_noStore();

  
  try {
    const data = await sql<Product>`
    SELECT products.id, products.category, products.title, products.price, products.description, products.image
    FROM products
    WHERE products.id = ${id};
    `;

    const product = data.rows.map((product) => ({
      ...product,
      price: product.price / 100,
    }));
    return product[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error ('Failed to fetch product.')
  }
}

export async function fetchProductPages (query: string, displayed: number) {
  const itemsPerPage = displayed;
  unstable_noStore()
  try {
    const count = await sql`
    SELECT COUNT(*)
    FROM products
    WHERE 
      products.title ILIKE ${`%${query}%`}
  
  
    `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / itemsPerPage);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of products.');
  }
}


export async function fetchProductsNoFilter(
  
  ) {
    
    
  unstable_noStore();
  try {
    const data = await sql<ProductField>`
    SELECT id, title
    FROM products
    ORDER BY title ASC`;

    const products = data.rows.map((product) => ({
      ...product
    }
    ));
    
    return products;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch all products.");
  }

};

 

 