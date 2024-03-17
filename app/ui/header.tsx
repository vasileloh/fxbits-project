import Search from "./search";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";


export default function Header() {
    return (
        <div className='z-50 fixed flex flex-row top-0 w-full h-16 justify-between bg-gray-800'>
             
             
             
           
                    <div className="flex ml-4 h-10 my-3">
                        <a href="/# ">
                            <span className=" w-20 text-3xl font-extrabold" >HOME</span>
                        </a>
                    </div>

                    <div className="flex">
                        <Search placeholder="Search Products" />
                    </div>

                    <div className="flex my-3">
                        <ShoppingCartIcon width={40} height={40} />
                    </div>
               
        </div>
    )
}



