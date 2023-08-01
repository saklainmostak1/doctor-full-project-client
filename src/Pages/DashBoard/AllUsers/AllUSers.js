import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUSers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://doctors-portal-server-indol-six.vercel.app/users')
            const data = await res.json()
            return data
        }

    })
    const handleMakeAdmin = id =>{
        fetch(`https://doctors-portal-server-indol-six.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('sucessFully make admin')
                refetch()
            }
        })
    }


    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure delete')

        if (proceed) {
            fetch(`https://doctors-portal-server-indol-six.vercel.app/all-users/${id}`, {
                method: "DELETE",

            })
                .then(Response => Response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success('Delete Successfully')
                    }

                })
        }
    }


    return (
        <div>
            <h2 className="rexr-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin </th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user, i) =>  <tr className='hover'
        key={user._id}
        >
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{
            user?.role !== 'admin' &&
            <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
        <td><button
        onClick={() => handleDelete(user._id)}
        
        className='btn btn-xs btn-danger'>Delete</button></td>
      </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUSers;