import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {createUser, updateUser} = useContext(AuthContext)
    const [signUperror, setSignUpError] = useState('')
    const navigate = useNavigate()
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const [token] = useToken(createdUserEmail)
    if(token){
        navigate('/')
    }

    const handleSignUp = (data) =>{
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user);
            toast.success('user Create Sucessfully')
            const userInfo ={
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
              saveUser(data.name, data.email)
            })
            .catch(error => {
                console.error(error)
            })
        })
        .catch(error => {
            console.error(error)
            setSignUpError(error.message)
        })
    }

    const saveUser = (name, email) => {
        const user = {name, email}
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(Response => Response.json())
        .then(data => {
            setCreatedUserEmail(email)
            
        })
    }

   
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                            <span className="label-text">password</span>
                        </label>
                        <input type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {value: 6, message: 'password must be 6 character'},
                                pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong'}
                            })}  
                            className="input input-bordered w-full max-w-xs" />    
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>} 
                    </div>
                    {
                        signUperror &&  <p className='text-red-500'>{signUperror}</p>
                    }
                    <input className='btn btn-accent w-full mt-5' value='Sign Up' type="submit" />
                </form>
                <p>Already Have An Account<Link className=' text-secondary' to='/login'> Please login</Link> </p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;