import React from 'react';

const AppiontmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option
    return (
        <div className="card m-5 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} </p>
                <div className="card-actions justify-center">
                    <label
                    disable={slots.length === 0}
                    onClick={() => setTreatment(option)} 
                    htmlFor="booking-modal" className="btn btn-primary text-white">Book Appiontment</label>
                </div>
            </div>
        </div>
    );
};

export default AppiontmentOption;