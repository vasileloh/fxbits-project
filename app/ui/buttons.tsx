import {PencilIcon, PlusIcon, TrashIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DeleteProductWithId } from '../lib/actions';


export function AddProduct() {
  return (
    <Link
      href="admin/create"
      className="flex h-10 w-[214px] items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mt-4 mb-2"
    >
      <span className="hidden md:block">Add Product</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}


export function EditProduct({ id }: { id: string}) {
  return (
    <Link
      href={`admin/edit?id=${id}`}
      
    >
        <button className="rounded-md border p-2  hover:bg-gray-100">
      <PencilIcon className="w-5" />
      </button>
    </Link>
  );
}

export function DeleteProduct({ id }: { id: string }) {
  const deleteProd = DeleteProductWithId.bind(null, id);
  return (
    <>
     <form action={deleteProd}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
      </form>
    </>
  )
}



