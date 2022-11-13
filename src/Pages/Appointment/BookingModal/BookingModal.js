import format from 'date-fns/format';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    console.log(treatment);
    const date = format(selectedDate, 'PP')
    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target
        const slot = form.slot.value
        const names = form.names.value
        const email = form.email.value
        const phone = form.phone.value
        console.log(date, slot, name, email, phone);
        const booking = {
            appiontmentDate: date,
            treatment: name,
            patient: names,
            slot, 
            email,
            phone,

        }
        console.log(booking);
       setTreatment(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} className="input w-full input-bordered " disabled />
                        <select name='slot' className="select select-bordered w-full">
                            
                           {
                              slots.map((slot , i) => <option
                                key={i}
                              value={slot}
                              >{slot}</option> )
                           }
                        </select>
                        <input name='names' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;