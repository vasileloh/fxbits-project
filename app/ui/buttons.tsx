import {PencilIcon, PlusIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';


export function AddProduct() {
  return (
    <Link
      href="/create"
      className="flex h-10 w-[214px] items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mt-4 mb-2"
    >
      <span className="hidden md:block">Add Product</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}


export function EditProduct() {
  return (
    <Link
      href="/edit"
      className="flex h-10 w-[214px] items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mt-4 mb-2"
    >
      <span className="hidden md:block">Edit Product</span>{' '}
      <PencilIcon className="h-5 md:ml-4" />
    </Link>
  );
}



