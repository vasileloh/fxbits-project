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
    image: z.string({
      invalid_type_error: 'Please insert a product image URL'
    }),
    category: z.string({
      invalid_type_error: 'Please insert a product category'
    })

});
const AddProduct = FormSchema.omit({id: true})



export async function addProduct( formData: FormData) {
  const {title, price, description, image, category} = AddProduct.parse({
    title: formData.get('title'),
    price: formData.get('price'),
    description: formData.get('description'),
    image: formData.get('image'),
    category: formData.get('category')
    
    
    });
    
  
 try {
  await sql`
   INSERT INTO products (title, price, description, image, category)
   VALUES (${title}, ${price}, ${description}, ${image}, ${category})
   `;
 } catch (error) {
    return {
        message: 'Database Error'
    };
 }
   revalidatePath('/#');
   redirect('/#')
}

const EditProduct = FormSchema.omit({id: true})


export async function editProduct(id: string, formData: FormData) {
  const { title,  price, description, image,category } = EditProduct.parse({
    title: formData.get('title'),
    price: formData.get('price'),
    description: formData.get('description'),
    image: formData.get('image'),
    category: formData.get('category')
  });
 
 
  try {
  await sql`
    UPDATE products
    SET title = ${title}, price = ${price}, description = ${description}, image = ${image},  category = ${category}
    WHERE id = ${id}
  `;
  } catch (error) {
    return {
        message: 'Database Error: Failed to Edit Product.'
    };
  }
  revalidatePath('/#');
  redirect('/#');
};