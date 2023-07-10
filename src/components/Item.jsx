import React from "react";
import {useCart} from "react-use-cart"

const Item = (props) => {
    const { addItem} = useCart();

    return(
        
    <div class="font-sans m-5">
        <div class="flex-none w-48 relative m-5">
            <img src={props.img} alt="" className="inset-0 object-cover w-10 h-10" loading="lazy" />
        </div>
        </div>


        // <form class="p-6">
        //     <div class="flex flex-wrap">
        //     <h1 class="flex-auto text-lg font-semibold text-slate-900">
        //         {props.title}
        //     </h1>
        //     <div class="text-lg font-semibold text-slate-500">
        //         {props.price}
        //     </div>
        //     <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        //         In stock
        //     </div>
        //     </div>
        //     <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        //     <div class="space-x-2 flex text-sm">
        //         <label>
        //         <input class="sr-only peer" name="size" type="radio" value="xs" checked />
        //         <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
        //             XS
        //         </div>
        //         </label>
        //         <label>
        //         <input class="sr-only peer" name="size" type="radio" value="s" />
        //         <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
        //             S
        //         </div>
        //         </label>
        //         <label>
        //         <input class="sr-only peer" name="size" type="radio" value="m" />
        //         <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
        //             M
        //         </div>
        //         </label>
        //         <label>
        //         <input class="sr-only peer" name="size" type="radio" value="l" />
        //         <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
        //             L
        //         </div>
        //         </label>
        //         <label>
        //         <input class="sr-only peer" name="size" type="radio" value="xl" />
        //         <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
        //             XL
        //         </div>
        //         </label>
        //     </div>
        //     </div>
        //     <div class="flex space-x-4 mb-6 text-sm font-medium">
        //     <div class="flex-auto flex space-x-4">
        //         <button type="button" class="h-10 px-6 font-semibold rounded-md bg-black text-white" onClick={() => addItem(props.item)}>
        //         Buy now
        //         </button>
        //     </div>
        //     <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        //         <svg width="20" height="20" fill="currentColor" aria-hidden="true">
        //         <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        //         </svg>
        //     </button>
        //     </div>
        //     <p class="text-sm text-slate-700">
        //     Free shipping on all continental US orders.
        //     </p>
        // </form>

        // <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //         <img src={props.img} classname="p-3 rounded-t-lg"></img>
        //             <div classname="flex items-center mt-2 mb-2">
        //                 <h5 class="card-title"> {props.title}</h5>
        //                 <h5 class="card-title">Rp {props.price}</h5>
        //                 <h5 class="card-title"> {props.desc}</h5>
        //                 <button class="btn btn-primary m-1" onClick={() => addItem(props.item)}>Beli</button>
        //             </div>
        // </div>
 
    )
}

export default Item;