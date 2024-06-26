import { fetchProductPages } from "@/app/lib/data";
import { AddProduct } from "@/app/ui/buttons";
import ProductTable from "@/app/ui/ProductTable";
import Search from "@/app/ui/search";
import { signOut } from "@/auth";
import PowerIcon from "@heroicons/react/20/solid/PowerIcon";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    displayed: number;
    sortType: string;
    query: string;
    page: number;
  };
}) {
  const displayed = searchParams?.displayed || 10;
  const sortType = searchParams?.sortType || "ASC";
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  //const totalPages = await fetchProductPages(query, displayed);

  return (
    <div className="mt-7">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="flex h-[48px] text-gray-900 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky100 gover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
      <AddProduct />
      <div className="flex justify-center">
        <ProductTable
          displayed={100}
          sortType={sortType}
          query={query}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
