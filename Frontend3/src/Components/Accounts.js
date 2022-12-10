import React, {useState} from "react";
import Login from "./Login";
import Signup from "./Signup";

function Accounts(props){
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (forName) => {
        setCurrentForm(forName);
    }
    return (
        <div className="Form">
        {
            currentForm === "login" ? 
                <Login 
                    onFormSwitch={toggleForm} 
                    loginMetaData={props.loginMetaData}
                    updateLoginMetaData = {props.updateLoginMetaData} 

                /> 
                : <Signup onFormSwitch={toggleForm} />
        } 

        </div>
    );
}

export default Accounts;