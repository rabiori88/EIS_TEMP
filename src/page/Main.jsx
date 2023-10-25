import React from  'react'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Main() {
    // const [authenticated, setauthenticated] = useState(null);
    const navigate = useNavigate();

    const loggedInUser = localStorage.getItem("authenticated");
    const handleNotice = () => {
        navigate('/BBS010')
    }
    // useEffect(() => {
    
    // if (loggedInUser) {
    //     setauthenticated(loggedInUser);
    // }
    // }, []);

    if (loggedInUser !== "true") {
        return <Navigate replace to="/login" />;
    } else {
        return (
        <div>
            <p onClick={handleNotice}>공지사항</p>
            
        </div>
        );
    }
}