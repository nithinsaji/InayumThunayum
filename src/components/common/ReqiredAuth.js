import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequiredAuth = ({ allowedRoles }) => {

    const location = useLocation();

    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})

    const getUser = () => {
        let user = localStorage.getItem("user");
        console.log(user);
        if (user) {
            user = JSON.parse(user);
            setUser(user);
            console.log("role ",user.role);
        } else {
            user = null;
            setUser({});
        }
    }

    useEffect(() => {
        setIsLoading(true);
        getUser();
        setIsLoading(false);
        console.log("allowedRoles ",allowedRoles);
    }, [])

    return (

        isLoading
            ? <p>Loading...</p>
            : user.role == allowedRoles
                ? user.status == 'Active'? <Outlet /> : <Navigate to="/status" state={{ status : user.status }} replace />
                : <Navigate to="/signup" state={{ from: location }} replace />

    );
}

export default RequiredAuth;