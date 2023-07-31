import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateDoctor = () => {

    const { id } = useParams()


    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-indol-six.vercel.app/appointmentSpecialty')
            const data = await res.json()
            return data
        }
    })





    const [updateDoctore, setUpdateDoctore] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/doctors/${id}`)
            .then(Response => Response.json())
            .then(data => setUpdateDoctore(data))
    }, [id])



    console.log(updateDoctore, 'nayan')

    const handleEditHome = event => {
        event.preventDefault()
        fetch(`http://localhost:5000/allDoctor-update/${updateDoctore._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDoctore)
        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('Successfully Update!');
                }

            })
    }

    const handleChange = event => {
        const field = event.target.name
        const value = event.target.value
        const review = { ...updateDoctore }
        review[field] = value
        setUpdateDoctore(review)
    }


    return (
        <div className=''>

            <form onSubmit={handleEditHome}>
                <div className="container mx-auto px-3 pt-10 pb-10 bg-[#ddddddac]">
                    <h1 className="font-bold text-2xl ">Update Doctor</h1>
                    <div className="lg:flex ">
                        <div className=" mt-8  w-full lg:mr-5">
                            <div className=" bg-white p-5 rounded-md">
                                <h3 className="text-xl font-bold">Doctor Information</h3>
                                <div className="divider"></div>

                                <div className="mt-6 lg:flex md:flex items-center">
                                    <div className="w-60">
                                        <label htmlFor="">
                                            Doctor Name
                                            <sup>
                                                <span className="text-red-500 mr-1">*</span>
                                            </sup>
                                        </label>
                                    </div>
                                    <input
                                        defaultValue={updateDoctore.name}
                                        onChange={handleChange}
                                        name='name'
                                        placeholder="Product Name"
                                        type="text"
                                        className="input input-bordered mt-1 w-full rounded-sm"
                                    />
                                </div>



                                <div className="mt-8 lg:flex md:flex items-center">
                                    <div className="w-60 mb-1">
                                        <label htmlFor="">
                                        Specialty
                                            <sup>
                                                <span className="text-red-500 mr-1">*</span>
                                            </sup>
                                        </label>
                                    </div>
                                    <div className="w-full">
                                        <select
                                         onChange={handleChange}
                                            name='specialty'
                                            className="select select-bordered w-full rounded-sm"

                                            id=""

                                        >
                                          
                                            {
                                                specialties?.map(specialty => <option
                                                    key={specialty._id}
                                                    value={specialty.name}
                                                >{specialty.name}</option>)
                                            }


                                        </select>
                                    </div>
                                </div>





                                <div className="bg-white rounded-md mt-8">


                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Price
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            defaultValue={updateDoctore.price}
                                            onChange={handleChange}
                                            name='price'
                                            placeholder="Product Name"
                                            type="text"
                                            className="input input-bordered mt-1 w-full rounded-sm"
                                        />
                                    </div>
                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Email
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            defaultValue={updateDoctore.email}
                                            onChange={handleChange}
                                            name='email'
                                            placeholder="Product Name"
                                            type="text"
                                            className="input input-bordered mt-1 w-full rounded-sm"
                                        />
                                    </div>



                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Description
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            defaultValue={updateDoctore.description}
                                            onChange={handleChange}
                                            name='description'
                                            placeholder="Product Name"
                                            type="text"
                                            className="textarea textarea-bordered  w-full h-24  rounded-sm"
                                        />
                                    </div>

                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Qualification
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            defaultValue={updateDoctore.qualification}
                                            onChange={handleChange}
                                            name='qualification'
                                            placeholder="Product Name"
                                            type="text"
                                            className="textarea textarea-bordered  w-full h-24  rounded-sm"
                                        />
                                    </div>

                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                CERTIFICATION1
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            defaultValue={updateDoctore.CERTIFICATION1}
                                            onChange={handleChange}
                                            name='CERTIFICATION1'
                                            placeholder="Product Name"
                                            type="text"
                                            className="textarea textarea-bordered  w-full h-24  rounded-sm"
                                        />
                                    </div>
                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                CERTIFICATION2
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            defaultValue={updateDoctore.CERTIFICATION2}
                                            onChange={handleChange}
                                            name='CERTIFICATION2'
                                            placeholder="Product Name"
                                            type="text"
                                            className="textarea textarea-bordered  w-full h-24  rounded-sm"
                                        />
                                    </div>




                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                AWARDS1
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            defaultValue={updateDoctore.AWARDS1}
                                            onChange={handleChange}
                                            name='AWARDS1'
                                            placeholder="Product Name"
                                            type="text"
                                            className="textarea textarea-bordered  w-full h-24  rounded-sm"
                                        />
                                    </div>

                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                AWARDS2
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            defaultValue={updateDoctore.AWARDS2}
                                            onChange={handleChange}
                                            name='AWARDS2'
                                            placeholder="Product Name"
                                            type="text"
                                            className="textarea textarea-bordered  w-full h-24  rounded-sm"
                                        />
                                    </div>
















                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="flex justify-end">
                        <input

                            className="bg-[#ff8084] text-white px-6 py-2 lg:font-medium text-small lg:text-sm rounded-md my-7 cursor-pointer " type="submit" />

                    </div>

                </div>
            </form>


        </div>
    );
};

export default UpdateDoctor;