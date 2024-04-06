import { fetchProducts } from "../lib/data";
import { AddProduct, DeleteProduct, EditProduct } from "./buttons";

export default async function ProductTable({ displayed,
    sortType,
    query,
    currentPage,}:
    {
        displayed: number;
        sortType: string;
        query: string;
        currentPage: number



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
     <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 text-black p-2 md:pt-0">
          <div className="md:hidden">
            {products?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                     
                      <p>{invoice.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.category}</p>
                  </div>
                  {invoice.description} 
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {invoice.price}
                    </p>
                    
                  </div>
                  <div className="flex justify-end gap-2">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
           <table className=" w-[900px] text-black">
             <thead className="rounded-lg text-left text-sm font-normal" >
                    <tr>
                        
                        <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                            Title
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                            Category
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                            Description
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
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
                       className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                       >
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            {product.title}
                        </td>
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            {product.category}
                        </td>
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            {product.description}
                        </td>
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            {product.price}
                        </td>
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <AddProduct />
                            <EditProduct />
                            <DeleteProduct id={product.id} />
                        </td>
                        
                       </tr>
        
                ))}
             </tbody>
           </table>
          </div>
          </div>
          </div>
                 </main>


                        
        )
    
}