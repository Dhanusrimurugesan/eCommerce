import React from "react";
import Footer from './footer';
import Header from './header';
import {Outlet} from "react-router-dom";

class Layout extends React.Component {
    render() {
        return (
            <>
                <Header />
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