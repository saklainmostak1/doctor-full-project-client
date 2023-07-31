import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const MyAppointment = () => {

    const { user } = useContext(AuthContext)

    // const url = `https://doctors-portal-server-indol-six.vercel.app/bookings?email=${user?.email}`

    // const { data: bookings = [], refetch } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //         const data = await res.json()
    //         return data
    //     }
    // })


    const { data: bookings = [], isLoading, refetch
    } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })


    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure delete')
            
           if(proceed){
            fetch(`http://localhost:5000/all-appointments/${id}`, {
                method: "DELETE",
               
            })
            .then(Response => Response.json())
            .then(data => {
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('Delete Successfully')
                }
               
            })
           }
    }
  

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Doctore Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr
                                key={booking._id}
                                className="">
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.doctorName}</td>
                                <td>{booking.appiontmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>{
                                    booking.price && !booking.paid
                                    &&
                                    <Link 
                                    to={`/dashboard/payment/${booking._id}`}>
                                        <button className='btn btn-sm btn-primary'>Pay</button>
                                    </Link>
                                }
                                    {
                                        booking.price && booking.paid
                                        &&
                                        <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                                <td>{
                                    booking.price && !booking.paid
                                    &&
                                    <button 
                                    onClick={() => handleDelete(booking._id)}
                                    className='btn btn-xs bg-red-500 border-none text-white'>Delete</button>
                                }
                                    {
                                        booking.price && booking.paid
                                        &&
                                        <span className='text-red-500'>Cann't Delete After Payments</span>
                                    }
                                </td>
                               
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;