import EditForm from "@/app/ui/edit-product-form";
import { fetchProductById, fetchProductsNoFilter } from "@/app/lib/data";
import SelectProduct from "@/app/ui/select-product";

export default async function Page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const id = searchParams?.id;
  const products = await fetchProductsNoFilter();
  const product = await fetchProductById(id);
  console.log(id);

  return (
    <main className="pt-16">
      <SelectProduct products={products} />
      {id && <EditForm product={product} />}
    </main>
  );
}
