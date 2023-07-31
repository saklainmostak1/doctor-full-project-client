import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading'

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imagehostkey =  process.env.REACT_APP_imgbb_key
    const navigate = useNavigate()
    const {data: specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async() =>{
            const res = await fetch('https://doctors-portal-server-indol-six.vercel.app/appointmentSpecialty')
            const data = await res.json()
            return data
        }
    })
    
    const handleAddDoctor = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(Response => Response.json())
        .then(imgData => {
            console.log(imgData);
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    description: data.description,
                    qualification: data.qualification,
                    CERTIFICATION1: data.CERTIFICATION1,
                    CERTIFICATION2: data.CERTIFICATION2,
                    AWARDS1: data.AWARDS1,
                    AWARDS2: data.AWARDS2,
                    fee: data.fee,
                    image: imgData.data.url
                }
                fetch('https://doctors-portal-server-indol-six.vercel.app/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(Response => Response.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${data.name} is added sucessfully`)
                    navigate('/dashboard/managedoctors')
                })
            }
        })


    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='h-[800px] flex justify-center items-cente'>

        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        {...register('name', {
                            required: 'Name is required'
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        {...register('email', {
                            required: 'Email is required',
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Fee</span>
                    </label>
                    <input type="text"
                        {...register('fee', {
                            required: 'Email is required',
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text"
                        {...register('description', {
                            required: 'Email is required',
                        })}
                        className="textarea textarea-bordered  w-full h-24 max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Qualification</span>
                    </label>
                    <input type="text"
                        {...register('qualification', {
                            required: 'Email is required',
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">CERTIFICATION 1</span>
                    </label>
                    <input type="text"
                        {...register('CERTIFICATION1', {
                            required: 'Email is required',
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">CERTIFICATION 2</span>
                    </label>
                    <input type="text"
                        {...register('CERTIFICATION2', {
                            required: 'Email is required',
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> AWARDS 1</span>
                    </label>
                    <input type="text"
                        {...register('AWARDS1', {
                            required: 'Email is required',
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> AWARDS 2</span>
                    </label>
                    <input type="text"
                        {...register('AWARDS2', {
                            required: 'Email is required',
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speacialty</span>
                    </label>
                    <select 
                    {...register('specialty')}
                    className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                            key={specialty._id}
                            value={specialty.name}
                            >{specialty.name}</option> )
                        }
                        
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register('image', {
                            required: 'Photo is required'
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-5' value='Add Doctor' type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddDoctor;