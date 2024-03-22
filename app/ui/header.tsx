import { AccordionSearch } from "./accordion";
import Search from "./search";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";


export default function Header() {
    return (
        <div className='z-50 fixed flex flex-row top-0 w-full h-16 justify-between border-b-[.5px] border-black '>
             
             
             
           
                    

                   
                      <div className="flex my-3">
                        <ShoppingCartIcon width={40} height={40} color="black" />
                    </div>
                    
                    <div className="flex ml-4 h-10 my-3">
                        <a href="/# ">
                            <span className=" w-20 text-3xl font-[150] text-black" >tech SHOP</span>
                        </a>
                    </div>
                  {/* <div className="w-[200px]">
                   <div className="transition ease-in-out delay-300 hover:-ml-10 text-black bg-red-400">adsasd</div>
    </div> */}
         <div className="flex my-3">
            <Search placeholder="Search Products"/>
            </div>
               
        </div>
    )
}



