'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Url } from 'next/dist/shared/lib/router/router';








  const regex = new RegExp("^\/")
const FormSchema = z.object({
    id: z.string(),
    title: z.string({
      invalid_type_error: 'Please enter a product title.'
    }).min(1),
    price: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than 0.'}),
    description: z.string( {
      invalid_type_error: 'Please insert a product description'
    }).min(1),
    image: z.string().regex(regex, 
      { message: 'Please insert a product image URL'}),
    category: z.string({
      invalid_type_error: 'Please insert a product category'
    }).min(3)

});

export type State = {
  errors?: {
    title?: string[];
    price?: string[];
    description?: string[];
    image?: string[];
    category?: string[];
  };
  message?: string | null;
};

const AddProduct = FormSchema.omit({id: true})



export async function addProduct(prevState: State, formData: FormData) {
  const validatedFields = AddProduct.safeParse({
    title: formData.get('title'),
    price: formData.get('price'),
    description: formData.get('description'),
    image: formData.get('image'),
    category: formData.get('category')
    
    
    });
    
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Add Product.',
      };
    }

    const {title, price, description, image, category} = validatedFields.data;
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
  const { title, category, price, description, image } = EditProduct.parse({
    title: formData.get('title'),
    category: formData.get('category'),
    price: formData.get('price'),
    description: formData.get('description'),
    image: formData.get('image')
    
  });
 
   const priceInCents = price * 100;
  try {
  await sql`
    UPDATE products
    SET title = ${title}, category = ${category}, price = ${priceInCents}, description = ${description}, image = ${image} 
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