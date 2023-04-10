import React from "react";
import Item from "./Item";
import Data from "./Data";
const Home = () => {
    console.warn(Data.productData)
    return(
        <div className="bg-slate-100 col-span-10 row-span-5 p-5">
            <h1 className="text-center mt-10">Semua barang</h1>
            <section className="row justify-content-center">
                        {Data.productData.map((item, index)=>{
                            return(
                                
                                <Item img={item.img} title={item.title} desc={item.desc} price={item.price}  item={item} key={index} />
                                
                            )
                        })}
		    </section>
            </div>
    )
}

export default Home;