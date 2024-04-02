import { fetchProductPages } from "@/app/lib/data";
import ProductTable from "@/app/ui/ProductTable";

export default async function Dashboard({searchParams}: {
    searchParams: {
      displayed: number;
      sortType: string;
      query: string;
      page: number
    }
  }) {

    const displayed = searchParams?.displayed || 10;
    const sortType = searchParams?.sortType || "ASC";
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchProductPages(query, displayed);


    return (
        <>
        <ProductTable  displayed={displayed} sortType={sortType} query={query} currentPage={currentPage} /> 
            </>    
    )
    
}