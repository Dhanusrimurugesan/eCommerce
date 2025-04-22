import React, { useEffect, useState } from "react";
import './category.css';
import { Link } from "react-router-dom";


function Menclothing() {

    const [things, setThings] = useState([]);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res => res.json())
            .then(json => setThings(json))
    }, []);

    
    return (
        <>
            <div className="d-flex justify-content-center ">
                {
                    things.map((v) =>
                        <>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h6>PRODUCT ID: {v.id}</h6>
                                    <img src={v.image} height="200px" width="200px" ></img>
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