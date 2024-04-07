import { fetchProducts } from "../lib/data";
import { formatCurrency } from "../lib/utils";
import { AddProduct, DeleteProduct, EditProduct } from "./buttons";

export default async function ProductTable({
  displayed,
  sortType,
  query,
  currentPage,
}: {
  displayed: number;
  sortType: string;
  query: string;
  currentPage: number;
}) {
  const products = await fetchProducts(displayed, query, currentPage);

  return (
    /*   <main>
                    <table className="bg-white text-black">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                        </tr>
                        {products.map(product => (
                            <tr>
                              <td scope="row">{product.id}</td>
                              <td scope="row">{product.title}</td>
                              <td scope="row">{product.category}</td>
                              <td scope="row">{product.description}</td>
                              <td scope="row">{product.price}</td>
                            </tr>
                      

                        

                        ))}
                    </table>
                        </main>          */

    <main>
      <div className="mt-6 justify-items-center">
        <div className="inline-table align-middle ">
          <div className="rounded-lg bg-gray-300 text-black p-2 md:pt-0">
            <div className="md:hidden">
              {products?.map((product) => (
                <div
                  key={product.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <p>{product.title}</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    {product.category}
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium pr-5">{formatCurrency(product.price)}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <EditProduct id={product.id} />
                      <DeleteProduct id={product.id} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden md:table text-black">
              <thead className="border-b rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Category
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium ">
                    Description
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Price
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                    
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {products?.map((product) => (
                  <tr
                    key={product.id}
                    className="w-full py-3 border-b text-sm  last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="w-52 py-3 pl-6 pr-3">
                      {product.title}
                      </td>
                    <td className="w-11 py-3 px-3">
                      {product.category}
                    </td>
                    <td className="w-52 py-3 px-3">
                      {product.description}
                    </td>
                    <td className="w-10 py-3 px-3">
                      {formatCurrency(product.price)}
                    </td>
                    <td className="w-12 py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-2">
                        <p title="Edit Product"><EditProduct id={product.id} /></p>
                        <p title="Delete Product"><DeleteProduct id={product.id} /></p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
