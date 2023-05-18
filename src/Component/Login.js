import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.init';


const auth = getAuth(app);

const Login = () => {
    const [success, setSucess] = useState(false);
    const [userEmail, setuserEmail] = useState('');
    const submit = event => {
        event.preventDefault();
        setSucess(false);
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSucess(true);
            })
    }
    const handleEmaiBlur = event => {
        const email = event.target.value;
        setuserEmail(email);
    }
    const handleForgetPassword = () => {

        if (!userEmail) {
            alert('Please Enter Your Email');
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Cheak Your Email')
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }



    return (
        <div>

            <Form onSubmit={submit} className='w-50 mx-auto mt-5'>
                <h3 className='text-primary'>Please Login </h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmaiBlur} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                    {/* <p className="text-danger">{passError}</p> */}
                </Form.Group>
                {success && <p className='text-success'>
                    User LOgIn Success</p>}
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <small> <p className='p-0 m-0'>Forget Password ? <button type='button' onClick={handleForgetPassword} className='btn btn-link'>reset</button></p></small>
                <small> <p className='p-0 m-0'>No Account ? Please Regester <Link to='/regester'>Regester</Link></p></small>
            </Form>
        </div>
    );
};

export default Login;