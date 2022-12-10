import React from 'react';
import '../Style/HomePage.css';
import ImgOnBannerRB from '.././assets/ImgOnBannerRB.png';
import NavBar from '../Modules/NavBar'
import Lecture from '../Components/Lecture'


function HomePage() {
    return (

        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="cd-10 mx-auto">
                    <>
                        <div>
                            <NavBar />
                        </div>
                        <div id="header" className="d-flex align-items-center">
                            <div className="container-fluid nav_bg">
                                <div className="row ">
                                    <div className="col-10 mx-auto ">
                                        <div className="row">
                                            <div style={{ "margin-left": "45px" }} className=" col-md pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                                <h1>
                                                    Learn with <strong className="brand-name"> <br></br> Smart Tutor </strong>
                                                </h1>
                                                <h2 className="my-3">
                                                    A better way of learning
                                                </h2>
                                                <div className="input-group">
                                                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                                    <button style={{ "margin-left": "7px" }} type="button" class="btn btn-outline-primary">search</button>
                                                </div>
                                            </div>
                                            <div style={{ "margin-left": "15px", "paddingLeft": "130px" }} className='col-lg-6 order-1 order-lg-2 header-img'>
                                                <img src={ImgOnBannerRB} className="img-fluid animated" alt="Error Loading"></img>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <div className="row" >
                                                <div className="col-sm" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                                    <Lecture />
                                                </div>
                                                <div className="col-sm" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                                    <Lecture />
                                                </div>
                                                <div className="col-sm" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                                    <Lecture />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <div className="row" >
                                                <div className="col-sm" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                                    <Lecture />
                                                </div>
                                                <div className="col-sm" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                                    <Lecture />
                                                </div>
                                                <div className="col-sm" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                                    <Lecture />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}

export default HomePage;