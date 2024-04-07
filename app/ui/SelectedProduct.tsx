import React from "react";
import { fetchProductById } from "../lib/data";
import EditForm from "./edit-product-form";

export default async function SelectedProduct({ id }: { id: string }) {
  const product = await fetchProductById(id);
  console.log(id);
  return (
    <>
      <EditForm product={product} />
    </>
  );
}
