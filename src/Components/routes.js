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

                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}
export default Routingdata;