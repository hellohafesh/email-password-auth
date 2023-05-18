import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const auth = getAuth(app);



// const register = (event) => {
//   event.preventDefault();
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   console.log(email, password);
// }
// const emailChange = event => {
//   console.log(event.target.value);
// }
// const passwordChange = event => {
//   console.log(event.target.value.length);
// }


const Regester = () => {

    const [passError, setPassEroor] = useState('');
    const [sucess, setSucess] = useState(false);
    const register = (event) => {
        setSucess(false);
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setPassEroor("plase 2 up c");
        //     return;
        // }
        if (password.length <= 5) {
            setPassEroor("plase 6 c");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSucess(true);
                from.reset();
                verifiyEmail();
                updateUser(name);
            })
            .catch(error => {
                console.error('Error:', error);
                setPassEroor(error.message);
            })
        setPassEroor('');
        const verifiyEmail = () => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    alert('Please Cheak Your Email')
                })
        }
    }
    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log('display Name')
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

    return (
        <div>
            <div>
                {/* <form onSubmit={register}>
        <input onChange={emailChange} type="text" placeholder='Type Your Email' name='email' />
        <br /><br />
        <input onBlur={passwordChange} type="password" placeholder='Type Your Password' name='password' />
        <br /><br />
        <button type="submit">Register</button>
      </form> */}
            </div>
            <Form onSubmit={register} className='w-50 mx-auto mt-5'>
                <h3 className='text-primary'>Please Resister </h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                    <p className="text-danger">{passError}</p>
                </Form.Group>
                {sucess && <p className='text-success'>
                    User Create</p>}
                <Button variant="primary" type="submit">
                    Resister
                </Button>

                <small> <p>Already Have Account ? Please Login <Link to='/login'>Login</Link></p></small>
            </Form>

        </div>
    );
};

export default Regester;