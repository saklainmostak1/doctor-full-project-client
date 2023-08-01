import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmAtionModal from '../../Shared/ConfirmationModal/ConfirmAtionModal';
import Loading from '../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const closeModal = () => {
        setDeletingDoctor(null)
    }

    // const { data: doctors, isLoading, refetch } = useQuery({
    //     queryKey: ['doctors'],
    //     queryFn: async () => {
    //         try {
    //             const res = await fetch('https://doctors-portal-server-indol-six.vercel.app/doctors', {
    //                 headers: {
    //                     authorization: `bearer ${localStorage.getItem('accessToken')}`
    //                 }
    //             })
    //             const data = await res.json()
    //             return data;

    //         }
    //         catch (error) {

    //         }
    //     }
    // })


    const {data: doctors = [],isLoading, refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async() =>{
            const res = await fetch('https://doctors-portal-server-indol-six.vercel.app/doctors')
            const data = await res.json()
            return data
        }

    })


    const handleDeleteDoctor = (doctor) => {
        fetch(`https://doctors-portal-server-indol-six.vercel.app/doctors/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(Response => Response.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Doctor ${doctor.name} Sucessfully delete`)
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl">Manage Doctors: {doctors?.length} </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr
                                key={doctor._id}
                                className="">
                                <th>{i + 1}</th>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label
                                        onClick={() => setDeletingDoctor(doctor)}
                                        htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>

                                </td>
                                <td>

                                    <Link to={`/dashboard/allDoctor/managedoctors/${doctor._id}`}>
                                        <button className='btn btn-xs'>Edit</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor &&
                <ConfirmAtionModal
                    title={`Are you sure you want to delete?`}
                    message={`if you delete ${deletingDoctor.name}. it cannot be undone`}
                    closeModal={closeModal}
                    sucessButtonName="Delete"
                    sucessAction={handleDeleteDoctor}
                    modalData={deletingDoctor}
                ></ConfirmAtionModal>
            }
        </div>
    );
};

export default ManageDoctors;