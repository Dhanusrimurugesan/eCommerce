
import React from "react";
import './category.css';
import { Link } from "react-router-dom";
import useFetch from "./usefetchcustom";

function Category() {
    // const [things, setThings] = useState([]);
    const[things]=useFetch("https://fakestoreapi.com/products/categories");

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products/categories')
    //         .then(res => res.json())
    //         .then(json => setThings(json))
    // }, []);

    return (
        <>
            <div className="container">

                <div className="banner">
                    <h1>Welcome to The Elegant Edge Page</h1>
                    <p>Explore a wide variety of products tailored to your needs.</p>
                </div>


                <div className="d-flex justify-content-center flex-wrap">
                    {things.map((v, index) => (
                        <div className="card" key={index} style={{ width: "18rem", margin: "10px" }}>
                            <div className="card-body">
                                <h1 className="card-title">{v}</h1>
                                <span><Link to={`/${v}`}>{v}</Link></span>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="featured-section">
                    <h2>Top Picks for You</h2>
                    <div className="featured-grid">
                        <div className="featured-card">
                            <h3>Electronics</h3>
                            <p>Upgrade your tech life with cutting-edge smartphones, smartwatches, and noise-cancelling headphones. Explore the newest arrivals in home automation and entertainment.</p>
                        </div>
                        <div className="featured-card">
                            <h3>Jewelry</h3>
                            <p>Shine bright with handcrafted necklaces, elegant rings, and timeless bracelets. Discover both classic and contemporary styles perfect for any occasion.</p>
                        </div>
                        <div className="featured-card">
                            <h3>Clothing</h3>
                            <p>Stay in style with our latest collection of men’s and women’s fashion. From casual streetwear to formal elegance—find your fit for every season.</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Category;