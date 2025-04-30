import React from "react";
import './category.css';
import { Link } from "react-router-dom";
import useFetch from "./usefetchcustom";


function Electronics() {

    const [things] = useFetch("https://fakestoreapi.com/products/category/electronics");
    
    return (
        <>
            <div className="d-flex justify-content-center flex-wrap ">
                {
                    things.map((v) =>
                        <div className="card products-card" key={v.id}>
                            <div className="card-body">
                                <h6>PRODUCT ID: {v.id}</h6>
                                <img src={v.image} alt={v.title} height="200px" width="200px" className="d-block mx-auto" ></img>
                                <h5>{v.title}</h5>
                                <Link to={`/${v.id}`}>
                                <button className="btn btn-primary">View Details</button>
                                </Link>
                            </div>
                        </div>

                    )}
            </div>

        </>
    )
}
export default Electronics;