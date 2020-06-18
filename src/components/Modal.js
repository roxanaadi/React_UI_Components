import React, { useState } from 'react';
import './Modal.css';

function Modal() {

    const [isOpen, setIsOpen] = useState(false);
    
    const openModal = () => {
        setIsOpen(!isOpen)
    }

    return (

        <div className="modal">
            <button
             onClick={ openModal }
             className = "openButton"
             >Open Modal
             </button>

            { isOpen ? (

                <div className="myModal">
                    <div className="modalContent">
                        <div className = "modalHeader">
                            <h3>Modal Title</h3>
                            <button className="closeButton" onClick = {() => setIsOpen(false)}>X</button>
                        </div>
                        
                        <p>
                            Modal is open. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam luctus tellus quis sapien egestas fringilla et faucibus lorem. Nunc
                            vehicula purus in faucibus tincidunt. Proin ornare pulvinar leo non fringilla.
                            Proin pretium erat in urna lobortis, et consequat ipsum tempus. Vestibulum ultricies
                            efficitur nunc, et eleifend felis scelerisque porta. Donec condimentum ullamcorper ultrices.
                            Vivamus in luctus sapien, quis fermentum erat. Fusce molestie aliquet nunc ac scelerisque. 
                            Maecenas blandit diam eu ultrices sodales. Cras mauris est, scelerisque sed vehicula ut, tempor vel sem.
                            us in neque faucibus, venenatis faucibus enim. In elit eliendum placerat tellus ut blandit. Fusce cursus 
                            lacus leo, a aliquet turpis pharetra sed. Donec lacinia tellus eu porttitor venenatis. In ac luctus diam.
                        </p>   
                    </div>
                </div>

            ) : null }
            
        </div>
    )
}

export default Modal;