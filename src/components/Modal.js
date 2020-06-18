import React, {Component, useState} from 'react';
import './Modal.css';

function Modal(props) {

    // const [isOpen, setIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

        // state = { 
        //     isOpen: false,
        //     setIsOpen: false
        //    }

    return (
        <div className = "modal">
            <button>toggle modal</button>
            {
                this.isOpen ? (
                    <div className = "modal">
                        <p>Modal is open</p>
                    </div>       
                ) : null 
            }
        </div>
    )
}

export default Modal;