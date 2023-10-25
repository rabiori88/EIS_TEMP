import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LOGIN_URL = 'http://localhost:53363/Membership/TryLogin';
const PWDCHK_URL = 'http://localhost:53363/BAS/GetPreUserPWDChk'
const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        try {
            const chkresponse = await axios.post(PWDCHK_URL,
                JSON.stringify({ userId: user, password: pwd  }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            );

            console.log(JSON.stringify(chkresponse?.data));
            JSON.stringify(chkresponse?.data)
            
            var chkResult = chkresponse.data.data.jsUserPWDChk;
            if(chkResult === 1)
            {
                const response = await axios.post(LOGIN_URL,
                    JSON.stringify({ loginId: user, loginPassword: pwd  }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: false
                    }
                );
                
                console.log(JSON.stringify(response?.data));
                //console.log(JSON.stringify(response));
                var accessToken = "";
                var result = JSON.stringify(response.data.data.type)
                var roles  = "";
                if(result === '"SUCCESS"')
                {
                    accessToken = "GOOOOOOOOOOD";
                    roles = "admin";
                }
                
                
                setAuth({ user, pwd, roles, accessToken });
                setUser('');
                setPwd('');
                setSuccess(true);
                
                localStorage.setItem("authenticated", true);
                navigate('/');


            } else if(chkResult === 2)
            {                
                setUser('');
                setPwd('');
                setSuccess(false);
                alert(chkresponse.data.data.ErrorMessage);
            }
            else 
            {
                setUser('');
                setPwd('');
                setSuccess(false);
                alert("Password wrong!");
            }

            
        } catch(err){

        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required                            
                        >
                            
                        </input>

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        >
                            
                        </input>
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}


export default Login
