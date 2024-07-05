import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAuthLogin } from './duck/action';
import Loader from '../../Loader/index';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const props = useSelector((state) => {
        return state.authLoginReducer
    });

    const { error } = props;
  
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const user = {
            tk: username,
            password: password,
        };
        dispatch(actAuthLogin(user, navigate))
    };



    const renderNoti = () => {
        return error && <div className='alert alert-danger'>{error}</div>
    };

    

    if (localStorage.getItem('UserAdmin')){
        const storedData = localStorage.getItem('UserAdmin');
        const { expiry } = JSON.parse(storedData);
        const now = new Date().getTime();
        if (now < expiry) return <Navigate replace to='/admin/images' />;
    }

    if (props.loading) return <Loader />

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>

                    <form onSubmit={handleLogin}>
                        <h3>Login</h3>
                        {renderNoti()}
                        <div className='form-group'>
                            <label>
                                Username:
                            </label>
                            <input className='form-control' type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>
                                Password:
                            </label>
                            <input className='form-control' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />

                        </div>

                        <button type="submit" className='btn btn-success'>Login</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;