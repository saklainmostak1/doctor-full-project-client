import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const AllAppointment = () => {

    
    const { user } = useContext(AuthContext)



    const { data: appointment = [], isLoading, refetch
    } = useQuery({
        queryKey: ['appointment'],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-indol-six.vercel.app/all-appointments`)
            const data = await res.json()
            return data
        }
    })



    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure delete')
            
           if(proceed){
            fetch(`https://doctors-portal-server-indol-six.vercel.app/all-appointments/${id}`, {
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
                        <th>Date</th>
                        <th>Time</th>
                        <th>Payment</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointment &&
                        appointment?.map((booking, i) => <tr
                            key={booking._id}
                            className="">
                            <th>{i + 1}</th>
                            <td>{booking.patient}</td>
                            <td>{booking.treatment}</td>
                            <td>{booking.appiontmentDate}</td>
                            <td>{booking.slot}</td>
                            <td>{
                                booking.price && !booking.paid
                                &&
                                <span className='text-red-500'>Not Paid</span>
                            }
                                {
                                    booking.price && booking.paid
                                    &&
                                    <span className='text-green-500'>Paid</span>
                                }
                            </td>
                            <td>
                                <button className='btn btn-xs'
                                onClick={() => handleDelete(booking._id)}
                                >Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllAppointment;