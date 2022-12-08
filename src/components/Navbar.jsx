import { NavLink } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CardWidget";
import Logo from "./Logo";

const Navbar = () =>{
    return(
    <>
        <nav className="navegacion navbar navbar-expand-lg">
            <div className="container-fluid">
                <li><NavLink to={'/'} className="nav-link i_nav"><Logo/></NavLink></li>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <NavLink to={<ItemListContainer/>} className="nav-link i_nav i_links">Juegos Consola</NavLink>
                        </li>
                        <li>
                            <NavLink to={<ItemListContainer/>} className="nav-link i_nav i_links">Juegos Mobile</NavLink>
                        </li>
                        <li>
                            <NavLink to={<ItemListContainer/>} className="nav-link i_nav i_links">Juegos PC</NavLink>
                        </li>
                        <li>
                        <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
};

export default Navbar;