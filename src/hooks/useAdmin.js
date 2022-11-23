import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() =>{
        if(email){
            fetch(`https://doctors-portal-server-indol-six.vercel.app/users/admin/${email}`)
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                setAdmin(data.isAdmin)
                setIsAdminLoading(false)
            })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}
export default useAdmin