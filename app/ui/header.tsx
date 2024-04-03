
import Search from "./search";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";


export default function Header() {
    return (
        <div className='z-50 bg-white fixed top-0 grid grid-cols-3 w-full h-16 justify-between border-b-[.5px] border-black '>
             
             
             
           
                    

                   
                      <div className="flex my-3 w-[200px]">
                        <ShoppingCartIcon width={40} height={40} color="black" />
                    </div>
                    
                    <div className="flex justify-center my-3">
                        <a href="/# ">
                            <span className=" w-20 text-3xl font-[150] text-black" >tech SHOP</span>
                        </a>
                    </div>
                 
         <div className="flex justify-end my-3">
            <Search placeholder="Search Products"/>
            </div>
               
    </div> 

    
        /*<div className="z-50 fixed top-0 bg-white flex w-full flex-row px-3 py-4 md:px-2">
            <div className="flex grow flex-col justify-between space-x-2">
                <ShoppingCartIcon width={40} height={40} color="black" />
            </div>
            <div className="flex grow flex-row justify-center align-item space-x-2">
                         <a href="/# ">
                            <span className=" w-20 text-3xl font-[150] text-black" >tech SHOP</span>
                        </a>
            </div>
            <div className="flex grow flex-row justify-end  space-x-2">
                <Search placeholder="Search Producs" />
            </div>
        </div> */
    
    
    )
}



