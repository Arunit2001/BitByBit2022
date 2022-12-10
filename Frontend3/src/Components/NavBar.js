import React from 'react';

function NavBar(props) {
    return ( 
        <div style={{height : "100%", width : "100%", backgroundColor : "orange", padding : "20px 20px 20px 40px", position : "absolute", zIndex : "99999", display : "flex", alignItems : "center"}}>
            <img src="https://cdn-icons-png.flaticon.com/512/2153/2153317.png" style={{width : "60px", height : "60px"}}/>
        </div>
     );
}

export default NavBar;