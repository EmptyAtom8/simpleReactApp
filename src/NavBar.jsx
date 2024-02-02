import React, {Component} from "react";
import { Link } from "react-router-dom";
export class NavBar extends Component
{
render (){
    return (<React.Fragment>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
        <div className="container-fluid">
            <a className="navbar-brand" href="/#">MyApp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/LogIn" className="na-link">
                        LogIn
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to="/cart" className="na-link">
                        Shopping Cart
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to="/CusList" className="na-link">
                        customer Info
                    </Link>
                </li>
            </ul>
            </div>
        </div>
      </nav>
    </React.Fragment>
    );
    
}
}