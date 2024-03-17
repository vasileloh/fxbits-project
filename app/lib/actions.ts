'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";








  
const FormSchema = z.object({
    id: z.string(),
    title: z.string({
      invalid_type_error: 'Please enter a product title.'
    }),
    price: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than 0.'}),
    description: z.string( {
      invalid_type_error: 'Please insert a product description'
    }),
    image: z.string(),
});
const AddProduct = FormSchema.omit({id: true})



export async function addProduct( formData: FormData) {
  const {title, price, description, image} = AddProduct.parse({
    title: formData.get('title'),
    price: formData.get('price'),
    description: formData.get('description'),
    image: formData.get('image'),
    
    
    });
    
  
 try {
  await sql`
   INSERT INTO products (title, price, description, image)
   VALUES (${title}, ${price}, ${description}, ${image})
   `;
 } catch (error) {
    return {
        message: 'Database Error'
    };
 }
   revalidatePath('/#');
   redirect('/#')
}




