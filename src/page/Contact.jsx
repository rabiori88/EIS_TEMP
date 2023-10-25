import React from  'react'
import { Navigate } from 'react-router-dom';

export default function Contact() {
    
    const loggedInUser = localStorage.getItem("authenticated");
    // const [authenticated, setauthenticated] = useState(null);
    // const loggedInUser = localStorage.getItem("authenticated");
    // useEffect(() => {
    
    // if (loggedInUser) {
    //     setauthenticated(loggedInUser);
    // }
    // }, []);

    if (!loggedInUser === "true") {
        return <Navigate replace to="/login" />;
    } else {
        return (
        <div>
            <p>Welcome to your Dashboard</p>
        </div>
        );
    }
}