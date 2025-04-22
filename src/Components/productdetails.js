
import React, { useEffect, useState } from "react";
import './category.css';
import { useParams } from "react-router-dom";


function Productdetails() {
    const { id } = useParams();

    const [Things, setThings] = useState(null);

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setThings(json))
    }, [id]);

    if (!Things) {
        return (
            <>
                <h1>Loading!...</h1></>
        )
    }

    return (
        <>
            <div className="d-flex justify-content-center ">
                <>
                    <div className="card">
                        <div className="card-body">
                            <img src={Things.image} height="200px" width="200px" ></img>
                            <h5>{Things.title}</h5>
                            <h3>Description</h3>
                            <p>{Things.description}</p>
                            <h3></h3>
                            <h4><h3>Category: </h3> {Things.category}</h4>
                            <h5>PRICE: ${Things.price}</h5>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>

                    </div>
                </>
            </div>
        </>
    )
}
export default Productdetails;