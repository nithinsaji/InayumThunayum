import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequiredAuth = ({ allowedRoles }) => {

    const location = useLocation();

    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})

    const getUser = () => {
        let user = localStorage.getItem("user");
        if (user != null && user != undefined) {
            user = JSON.parse(user);
            setUser(user);
        } else {
            user = null;
            setUser({});
        }
    }

    useEffect(() => {
        setIsLoading(true);
        getUser();
        setIsLoading(false);
    }, [])

    return (

        isLoading
            ? <p>Loading...</p>
            : user && user?.role == allowedRoles
            ? user.status == 'Active'? <Outlet /> : <Navigate to="/status" state={{ status : user.status }} replace />
            : <Navigate to="/signup" state={{ from: location }} replace />

    );
}

export default RequiredAuth;
