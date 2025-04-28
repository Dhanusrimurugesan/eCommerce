import React from "react";
import Footer from './footer';
import Header from './header';
import { Outlet } from "react-router-dom";
import Submenu from "./submenu";

class Layout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Submenu />
                <section>
                    <article>
                        <Outlet />
                    </article>
                </section>
                <Footer />
            </>
        )
    }
}

export default Layout;