import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext)

    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();
    let location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        setLoading(true)

        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)

                const currentUser = {
                    email: user.email,
                }
                console.log(currentUser);

                // //JWT Token
                fetch('https://service-review-server-farvez999.vercel.app/jwt',
                    {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(currentUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        //local storage token set
                        localStorage.setItem('token', data.token);
                        setLoading(false)
                        navigate(from, { replace: true });
                    })
            })
            .then(error => {
                console.error(error)
                setLoading(false)
            })
    }

    return (
        <div>
            <div>
                <p className='text-center'> <small>Social Login</small> </p>
                <p onClick={handleGoogleSignIn} className='text-center'> <button className='btn btn-ghost'><FcGoogle className='h-8 w-8'></FcGoogle></button> </p>
            </div>

            {
                loading ? <div class="flex justify-center items-center">
                    <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                        <span class="visually-hidden">...</span>
                    </div>
                </div> :
                    ''
            }
        </div>
    );
};

export default SocialLogin;