import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
    const { id } = useParams()

    const { data: doctor = [], isLoading, refetch
    } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors/${id}`)
            const data = await res.json()
            return data
        }
    })


    return (
        <div>

            <div className='max-w-[1300px] mx-auto  '>
                <div className='lg:flex md:flex  gap-10 p-8 lg:p-10 md:px-10'>
                    <div>
                        <img src={doctor.image} alt="" className='w-[700px] mx-auto rounded-md h-[400px]  ' />
                    </div>
                    <div className='lg:w-[677px] mx-auto md:w-full mt-5 lg:mt-20 md:mt-20'>
                        <h2 className='text-green-600 text-2xl font-semibold mt-2'>{doctor.name} </h2>

                        <h4 className='text-xl mt-2'>{doctor.email}</h4>
                        <p className='mt-3 '>{doctor.description}</p>
                        <div>
                            <h4 className=' text-xl font-semibold mt-5'>Specialty {doctor.specialty}</h4>
                            <h4 className=' text-xl font-bold mt-5'>AppointMent Fee: {doctor.price} TK</h4>
                        </div>

                    </div>

                </div>
            </div>

            <div className='max-w-[1440px] mx-auto '>
                <div class="mt-5">
                    <div class="card border-primary px-8">

                        <button class="border-0 bg-blue-500 p-2 text-white ">More Information</button>
                    </div>
                    <div className='container mx-auto mt-5 px-8'>
                        <div className='flex'>
                            <div className='w-[50%]'>
                                <p>Qualification</p>
                            </div>
                            <div className='w-[50%]'>
                                <p>{doctor.qualification}</p>
                            </div>
                        </div>
                        <div className='flex mt-5'>
                            <div className='w-[50%]'>
                                <p>Certification</p>
                            </div>
                            <div className='w-[50%]'>
                                <p>{doctor.CERTIFICATION1}</p>
                                <p>{doctor.CERTIFICATION2}</p>
                            </div>
                        </div>
                        <div className='flex mt-5'>
                            <div className='w-[50%]'>
                                <p>Awards</p>
                            </div>
                            <div className='w-[50%]'>
                                <p>{doctor.AWARDS1}</p>
                                <p>{doctor.AWARDS2}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default DoctorDetails;