import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import './Dashboard.css'
const Dashboard = () => {

    const navigate = useNavigate()
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css';
        link.integrity = 'sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
        return () => {
            // Clean up the scripts and styles when the component is unmounted
            document.head.removeChild(link);

        };
    }, [])

    const logoutButton = () => {
        navigate('/login')
        localStorage.clear()
    }
    return (
        <>
            <div class="wrapper">
                <div class="sidebar my-sidebar">
                    <div class="header my-heade">Admin Dashboard</div>
                    <ul class="nav flex-column">
                        <li class="nav-item nav-link" >
                            <NavLink to={'/dashboard/category'} class="nav-link" >Category</NavLink>
                        </li>
                        <li class="nav-item nav-link" >
                            <NavLink class="nav-item" to={'/dashboard/product'}>Product</NavLink>
                        </li>

                    </ul>
                </div>
                <div class="content">
                    <div class="header">
                        <button class="btn logout-btn" onClick={() => {
                            logoutButton()
                        }}>Logout</button>
                    </div>
                    <div class="container mt-4">
                        <Outlet />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard