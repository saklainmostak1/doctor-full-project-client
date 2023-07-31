import React from 'react';
import GoogleMap from './GoogleMap';

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
    </div>
    );
};

export default Contact;