import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap";
import '../Style/Popup.css';


function Popup() {
    const [modal, setmodal] = useState(false);
    const togglePopup = () => setmodal(!modal);

    const [module_number, setModuleNumber] = useState('');
    const [module_name, setModuleName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(module_number);
        console.log(module_name);
    }
    return (
        <div>
            <Modal
                size="lg"
                isOpen={modal}
                toggle={() => setmodal(!modal)}
            >
                <ModalHeader
                    toggle={() => setmodal(!modal)}
                >
                    Popup Window
                </ModalHeader>
                <ModalBody>
                    <div className="auth-form-container" >
                        <form className="login-form" onSubmit={handleSubmit}>
                            <label htmlFor="module_number">Module Number</label>
                            <input value={module_number} onChange={(e) => setModuleNumber(e.target.value)} type="number" placeholder="" id="module_number" name="module_number" />
                            <label htmlFor="module_name">Module Name</label>
                            <input value={module_name} onChange={(e) => setModuleName(e.target.value)} type="text" placeholder="" id="module_name" name="module_name" />
                            <Button color="primary" type="submit" onClick={togglePopup}>Save</Button>
                        </form>
                    </div>
                </ModalBody>
                {/* <ModalFooter> */}
                    {/* <Button color="primary" onClick={togglePopup}>Done</Button> */}
                    {/* <Button color="secondary" onClick={togglePopup}>Cancel</Button> */}
                {/* </ModalFooter> */}
            </Modal>
            <button className="btn mt-3" style={{ backgroundColor: "blue" }} onClick={() => setmodal(true)} >
                Open Popup
            </button>
        </div>
    )

}

export default Popup;