import React from 'react';
import GoogleMap from './GoogleMap';
import { FaLocationDot, FaPhone,  } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
    return (
        <div className=''>
            <div className=' max-w-[1300px] mx-auto mt-10 mb-10 '>
                <div className=' bg-slate-500 rounded-md m-5'>
                    <div className='lg:m-20 m-5 md:m-10 '>
                        <h2 className="text-4xl text-center mb-10 lg:pt-5 md:pt-5">Send Us Message What You Want To Say
                        </h2>
                        <div className='max-w-[1140px] mx-auto'>
                            <form
                            // onSubmit={addReview}
                            >

                                <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full " required />
                                    <input
                                        // defaultValue={user?.email}
                                        name='email' type="email" disabled
                                        placeholder="email" className="input input-bordered input-success w-full " />

                                </div>
                                <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
                                <input className='btn btn-outline btn-info mb-5' type="submit" value="Send Message" />
                            </form>
                        </div>



                    </div>
                </div>


            </div>



            <div  >
                <GoogleMap></GoogleMap>
            </div>
            <div className=''>
                <div className="card rounded-none bg-black text-white">
                    <div className=" flex mt-10 lg:mx-20 mx-5 md:mx-20">
                        <h2 className="card-title mr-3"><FaLocationDot></FaLocationDot></h2>
                        <p>Bosila, West Dhanmondi , Dhaka </p>
                    </div>
                    <div className=" flex mt-8 lg:mx-20 mx-5 md:mx-20">
                        <h2 className="card-title mr-3"><FaPhone></FaPhone></h2>
                        <p>+972-9-9543040</p>
                    </div>
                    <div className="  flex mt-8 mb-10 lg:mx-20 mx-5 md:mx-20">
                        <h2 className="card-title mr-3"><FaMailBulk></FaMailBulk></h2>
                        <p>admin@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;