import React, { useState } from 'react'
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    // if (localStorage.getItem('loggedin')) {
    //     window.location.replace('/dashboard')
    //     return null;
    // }


    const handleLogin = () => {
        if (email.toLowerCase() === 'admin' && password === 'Admin@123') {
            localStorage.setItem('loggedin', JSON.stringify({ email, password }))
            navigate('/dashboard')
        }
        else if(email.toLowerCase() === 'user' && password === 'User@123') {
            localStorage.setItem('loggedin', JSON.stringify({ email, password }))
            navigate('/dashboard')
        }
        else{
            alert('wrong details')
        }

    }
    return (
        <div className='main'>
            <div className='main-head'>
                <div className='login'>
                    Login Form
                </div>
                <div className='sub-head'>
                    Fill out the form below to&nbsp; <div style={{ color: '#5A9AFF' }}>login</div>
                </div>
                <div style={{ marginTop: '5%' }}>
                    <Stack spacing={0.3}>
                        <div className='text-field'>
                            <TextField id="outlined-basic" label="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <TextField id="outlined-basic" label="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                            {/*style={{ backgroundColor: '#e3e3e3' }} */}

                        </div>
                        <div style={{ marginTop: '2rem' }} >
                            <Button variant="contained" className='login-button' style={{ backgroundColor: '#5A9AFF' }} onClick={handleLogin}>Login</Button>
                        </div>


                    </Stack>

                </div>
                {/* <div className='rememebr'>
                    <div style={{display:'flex', flexDirection:'raw', alignItems: 'center'}}>
                        <div>
                            <Checkbox defaultChecked value={check} onChange={(e)=>setCheck(e.target.value)}  />
                        </div>
                        <div>
                            Remember Me
                        </div>
                    </div>
                    <div style={{color:'gray'}}> <i>Forgot Passward?</i> </div>
                </div> */}
            </div>
            <div className="blue-footer"></div>
        </div>
    )
}
export default Login;