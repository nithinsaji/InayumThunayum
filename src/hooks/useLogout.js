import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useLogout = () => {
    const navigate = useNavigate()
    return (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken")
        toast.success('Logout Successfully')
        navigate('/')
    }
}

export default useLogout