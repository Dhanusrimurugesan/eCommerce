import React from "react";
import './category.css';
import { Link } from "react-router-dom";
import useFetch from "./usefetchcustom";


function Menclothing() {

    const [things] = useFetch("https://fakestoreapi.com/products/category/men's clothing");
 
    return (
        <>
            <div className="d-flex justify-content-center ">
                {
                    things.map((v) =>
                        <>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h6>PRODUCT ID: {v.id}</h6>
                                    <img src={v.image} alt={v.title} height="200px" width="200px" ></img>
                                    <h5>{v.title}</h5>
                                    <h6>PRICE: ${v.price}</h6> <Link to={`/${v.id}`}>
                                <button className="btn btn-primary">Buy Now</button>
                                </Link>
                                </div>
                            </div>
                        </>

                    )}
            </div>

        </>
    )
}
export default Menclothing;