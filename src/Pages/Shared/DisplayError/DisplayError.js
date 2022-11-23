import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError()
    const { logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () =>{
        logOut()
        .then(() => {
            navigate('/login')
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <p className="text-red-500">Something Went Wrong</p>
            <p className="text-red-600">{error.statusText || error.message}</p>
            <h3 className="text-3xl">please <button 
            onClick={handleLogout}
            className='btn btn-outline btn-primary'>LogOut</button> And Login Back </h3>
        </div>
    );
};

export default DisplayError;