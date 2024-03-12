
import  Image  from 'next/image';
import  { fetchProducts}  from '@/app/lib/data';


 
export default async function Products({
   displayed,
   sortType
}: { 
  displayed: number,
  sortType: string
}) {
    const products = await fetchProducts();
    
   
    
return (
<>   


{/*
<label>
    <h1>Produse Afisate</h1>
    <select className=" dark:bg-gray-800" value={value} onChange={handleChange}>
        {options.map((option: { value:  number; label: string }) => (

         <option className="dark:bg-gray-800" value={option.value} key={option.value}>{option.label}</option>

        ))}

    </select>      
</label>
        */}
       
<div className='grid grid-cols-4' >
          {products?.filter((element,n) => (
           
            n < displayed))
            .sort((a,b) => {
               if (sortType == "High to Low") {
               return b.price - a.price }
               return a.price - b.price;
})
            .map( element => (
            
                
            
            
        
                <div className="flex flex-1 flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700" key={element.id}>
                    <a href="#">
                        <Image className="object-fill rounded-t-lg" src={element.image} alt="" height={200} width={200} />
                        
                    </a>
                    <div className="grid p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-600">{element.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{element.description}</p> 
                    </div>
                    <div className="flex flex-col p-5 justify-around">
                        <h6 className="inline-flex mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-600">{element.price} RON</h6>
                        <a href="#" className="inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Adauga Cos
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    
                </div>
                
                        
                    
                        
                
                    
                    
                  
          )
            
     )}
     </div>   
     
     
    
     </>   
     )
}