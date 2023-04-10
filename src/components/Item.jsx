import React from "react";
import {useCart} from "react-use-cart"

const Item = (props) => {
    const { addItem} = useCart();

    return(
        <div className="col-3 col-md-2 col-lg-1,9 mx-0 mb-1">
            <div class="card p-2 overflow-hidden h-10 shadow">
                <img src={props.img} class="card-img-flex img-fluid"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title"> {props.title}</h5>
                        <h5 class="card-title">Rp {props.price}</h5>
                        <h5 class="card-title"> {props.desc}</h5>
                        <button class="btn btn-success" onClick={() => addItem(props.item)}>Add</button>
                    </div>
                </div>
        </div>
    )
}

export default Item;