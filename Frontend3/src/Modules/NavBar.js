import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

function NavBar() {
    return (
        <div style={{height : "100%", width : "100%", backgroundColor : "orange", padding : "20px 20px 20px 40px", position : "absolute", zIndex : "99999", display : "flex", alignItems : "center"}}>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="cd-10 mx-auto">
                        <nav style={{"background-color": "#e3f2fd"}} className="navbar navbar-expand-lg navbar-light">
                            <a style={{"fontFamily":"Roboto","marginLeft":"20px","fontSize":"30px"}} className="navbar-brand" href="#">E-LEARNING</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Service <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <button style={{"margin-right": "15px"}}  className='btn btn-primary'>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;