import React from 'react';
import img from '../../assets/doctor/1000x563_cmsv2_3ca855ee-4e62-5f54-91db-593910fb3a90-7283906.webp'
import img1 from '../../assets/doctor/shaoli03-903_1125.jpg'
import img2 from '../../assets/doctor/img_5356-final-903_1125.jpg'
import img3 from '../../assets/doctor/racheli-903_1125.jpg'
import img4 from '../../assets/doctor/yael-903_1125.jpg'
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
    return (
        <div className='mb-16 mt-10'>
            <div className='mt-[-12px]'>
                <div className="hero " style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/001/890/904/original/female-and-male-nurse-and-doctors-with-uniforms-and-masks-design-free-vector.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-4xl font-bold text-white">Let's Get Your Operating Authority</h1>
                            <p className="mb-5 text-white">The Doctor’s Portal provides health organizations that strive for excellence and quality care, with a tool that allows physicians to measure themselves against key performance indicators set by the organization. This tool helps optimize physician practices in compliance with the organization’s guidelines, offering valuable statistics. Health organizations can easily get creative with this tool by setting targets for practices, and even promoting healthy competition between physicians to increase engagement in providing useful metrics, and overall better quality of service.</p>
                            <button className="btn bg-[#3aa1d8] border-none text-white hover:bg-[#1697DA]">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-6 lg:px-0 md:px-28 max-w-[1000px] mx-auto mt-16'>
                <div className=''>
                    <p>Organization announcements can be broadcasted effectively with this tool. From one central location, the organization can send messages to all physicians along with a smart built-in questionnaire engine to capture timely feedback and help understand the various demands arising from different practices.
                        <br /> <br />
                        With these powerful tools, organizations that strive to provide better healthcare and service to their communities can have a real honest holistic picture on how well they perform medically, locate weaker practices, and invest resources to monitor and help improve alignment with the organization’s standards, while providing physicians with tools that gives them smart and important indicators so they can constantly measure and improve themselves.</p>
                    <img src={img} alt="" className='rounded-md mt-8' />
                </div>
                <div>

                    <h1 className='text-4xl font-semibold mb-5 mt-8'>Compliance Ruler</h1>
                    <p>This intelligent tool measures physician compliance by learning how well the physician uses or misuses clinical guidelines and preventive care campaigns set by the organization. The Compliance Ruler will assess how often the physician informs the patient of opportunities for additional care to maintain the organization’s standards.

                    </p>

                </div>



                <div className='mt-8'>
                    <h1 className='text-4xl font-semibold mb-5 '>Purchased Organization Knowledge Base

                    </h1>
                    <p>Provides physicians access to academic literature and knowledge base purchased by the organization. Physicians can easily browse through the library and quickly search and find information on various categories and specific subjects.</p>
                </div>
                <div className='mt-8'>

                    <p>For the last 20 years, Ewave MD Medical is developing and implementing an end to end solutions for public and private health organizations. Our solutions improve dramatically the health services and the health quality among our customers and help them to manage and control extreme situations using advanced IT tools and work processes. Our solutions help health organizations, hospitals and health ministries to control the budget, efficient the work processes and save a lot of money to the health sector in order to allocate these savings to investment in medicines, in health basket, more doctors and better service.

                        Ewave MD Medical and its affiliates have completed sustainable projects worldwide including Primary care, Tele-medicine, Centralized EMR, Health ERP, Claims management, E-prescription, health promotion, preventive health, patient portal, COVID19 monitoring and more, as part of a comprehensive platform in whom positions the health organizations to be at the forefront of technology.

                        Ewave MD Medical is a proud member of the leading Israeli Ewave Group that employs more than 1,000 employees worldwide.</p>
                </div>
                <div>
                    <h1 className='text-4xl font-semibold mb-5 mt-10 '>Our management team:</h1>
                    <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 '>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={img1} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Yosi Jan</h2>
                                <p>CO-Founder & CEO</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src={img2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shauli Nakar</h2>
                                <p>CO-Founder & Managing Partner</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src={img3} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Rachel Messerman</h2>
                                <p>Senior Medical System Projects Manager</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src={img4} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Yael Meroz</h2>
                                <p>Senior Digital & Hospital Projects Manager</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-20'>
                <button className="mr-1 btn btn-circle bg-red-700 border-none text-white">< FaGoogle></FaGoogle></button>
                <button className="mr-1 btn btn-circle bg-sky-500 border-none text-white">< FaTwitter></FaTwitter></button>
                <button className="mr-1 btn btn-circle bg-blue-900 border-none text-white">< FaFacebook></FaFacebook></button>
                <button className="mr-1 btn btn-circle bg-sky-800 border-none text-white">< FaLinkedin></FaLinkedin></button>
            </div>
            <div className='max-w-[1000px] mx-auto '>

                <div className=' bg-slate-300 container mx-auto mt-20 rounded-md'>

                    <div className='m-20'>
                        <div className='p-5'>
                            <h2 className="text-2xl text-center">NEWSLETTER
                            </h2>
                            <p className='text-center'>Enter your name and email address below to subscribe to myBproperty newsletter</p>
                        </div>
                        <form
                        >

                            <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                                <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full " required />
                                <input name='email' type="email" d
                                    placeholder="email" className="input input-bordered input-success w-full " />

                            </div>
                            <input className='btn btn-outline btn-info mb-5 w-full mt-5' type="submit" value="Subscribe Now" />
                        </form>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default About;