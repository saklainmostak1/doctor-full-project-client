import { useQuery } from '@tanstack/react-query';
import React from 'react';
import img1 from '../../assets/doctor/360_F_133334155_X23HzbJKawbIgXVaub4bPM8CjpkS5uMS.jpg'
import img2 from '../../assets/doctor/360_F_219914874_fcqxEeJ6clfwf43OcCNAMGNBySKzF5hl.jpg'
import img3 from '../../assets/doctor/doctor-stethoscope-hand-hospital-background-gown-94227568.webp'
import img4 from '../../assets/doctor/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.webp'
import { Link } from 'react-router-dom';

const Doctors = () => {


    const { data: doctors = [], isLoading, refetch
    } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-indol-six.vercel.app/doctors`)
            const data = await res.json()
            return data
        }
    })



    return (
        <div className='mt-10'>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} alt='' className="w-full h-[400px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} alt='' className="w-full h-[400px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} alt='' className="w-full h-[400px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={img4} alt='' className="w-full h-[400px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-20'>
                <h2 className='text-primary uppercase text-xl'>Our Doctors</h2>

            </div>
            <div>
                <div className='mt-5'>

                    {
                        // loading ? 
                        // <button className="btn loading m-10 ">loading</button>
                        // :

                        doctors?.map(doctor =>

                            <div className='max-w-[1300px] mx-auto  '>
                                <div className='lg:flex md:flex  gap-10 p-8 lg:p-10 md:px-10'>
                                    <div>
                                        <img src={doctor.image} alt="" className='w-[700px] mx-auto rounded-md h-[400px]  ' />
                                    </div>
                                    <div className='lg:w-[677px] mx-auto md:w-full mt-5 lg:mt-20 md:mt-20'>
                                        <h2 className='text-green-600 text-2xl font-semibold mt-2'>{doctor.name} </h2>

                                        <h4 className='text-xl mt-2'>{doctor.email}</h4>
                                        <p className='mt-3 '>{doctor.description.slice(0, 200) + '...'}</p>



                                        <div className='flex gap-2 mt-4'>


                                            <Link to={`/all-doctors/details/${doctor._id}`}>
                                                <button className='bg-[#1697DA] px-6 rounded-sm text-white font-semibold btn-sm'>Details</button>

                                            </Link>

                                        </div>

                                    </div>

                                </div>
                            </div>


                        )
                    }



                </div>

            </div>
        </div>
    );
};

export default Doctors;