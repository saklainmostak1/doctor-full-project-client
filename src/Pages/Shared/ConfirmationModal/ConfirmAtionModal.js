import React from 'react';

const ConfirmAtionModal = ({title,sucessButtonName, message, closeModal, modalData, sucessAction}) => {
    return (
        <div>
            
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label 
                        onClick={() => sucessAction(modalData)}
                        htmlFor="confirmation-modal" className="btn btn-primary">{sucessButtonName}</label>
                        <button
                        onClick={closeModal}
                        className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAtionModal;