import { Outlet, Navigate } from "react-router-dom";
export const PrivateRouter = () => {
    const auth = localStorage.getItem('isadmin')
    return (

        auth == 'true' ? <Outlet /> : <Navigate to={'/login'} />
    )
}