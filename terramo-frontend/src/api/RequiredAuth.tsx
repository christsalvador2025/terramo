import {  Navigate, Outlet } from "react-router-dom"

import { useAppSelector } from '../app/hooks';

// const { isAuthenticated } = useAppSelector((state) => state.auth);
const RequireAuth = () => {
  
    const { access_token, isAuthenticated } = useAppSelector(state => state.auth);
    
     if (!access_token && !isAuthenticated) {

        console.log("you dont have access!")
        return <Navigate to="/login" />
    }
    return (
        access_token && <Outlet />
            
    )
}
export default RequireAuth