import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Category from "./category";
import Layout from './layout';
import Electronics from "./electronics";
import Jewelery from "./jewelery";
import Menclothing from "./mencloth";
import Womenclothing from "./womencloth";
import Productdetails from "./productdetails";
import Login from "./login";
import Signup from "./signup";
import All from "./allproducts";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import Privacy from "./privacy";
import Terms from "./terms";


class Routingdata extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Category />} />
                            <Route path="electronics" element={<Electronics />} />
                            <Route path="jewelery" element={<Jewelery />} />
                            <Route path="men's clothing" element={<Menclothing />} />
                            <Route path="women's clothing" element={<Womenclothing />} />
                            <Route path="/:id" element={<Productdetails />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/allproducts" element={<All />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/privacy" element={<Privacy />} />
                            <Route path="/terms" element={<Terms />} />





                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}
export default Routingdata;