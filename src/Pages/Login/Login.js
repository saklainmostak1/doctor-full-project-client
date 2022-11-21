import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: {errors} , handleSubmit } = useForm()
    const {signIn} = useContext(AuthContext)
    const [loginError , setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    if(token){
        navigate(from, {replace: true})
    }
    const handleLogin = data =>{
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user);
            setLoginUserEmail(data.email)
          

        })
        .catch(error => {
            console.error(error.message)
            setLoginError(error.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                   
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" 
                        {...register("email", {
                            required: "Email Is required"
                        })}
                         className="input input-bordered w-full max-w-xs" />
                          {errors.email && <p className='text-red-500' >{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <input type="password" 
                        {...register("password", {
                            required: "Password Is required",
                            minLength: {value: 6, message: 'Password must be 6 character' }
                        })} 
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget password?</span>
                        </label>
                        <div>
                            {
                                loginError && <p className='text-red-500'>{loginError}</p>
                            }
                        </div>
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p>New to Doctors Portal <Link className=' text-secondary' to='/signup'>Create new account</Link> </p>
                <div className='divider'>OR</div>

                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;