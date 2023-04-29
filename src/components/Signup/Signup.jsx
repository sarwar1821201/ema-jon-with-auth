import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Signup = () => {
    const [error, setError]= useState('')
    const {createUser} = useContext(AuthContext)
   
    const handleSignUp= event =>{
   
         event.preventDefault();
        const email= event.target.email.value;
        const password= event.target.password.value;
        const confirm= event.target.confirm.value;
        console.log(email,password,confirm)
      
        setError('');
        if(password!==confirm){
            setError('Your Password do not match')
            return
        }
        else if(password.length<6){
            setError('password must be 6 character or longer')
            return
        }

        createUser(email,password)
        .then(result=> {
            const loggedUser= result.user
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
        
        <form onSubmit={handleSignUp} >
           
      <div className="form-control">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id=""  required/>
      </div>
      <div className="form-control">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id=""  required/>
      </div>
      <div className="form-control">
      <label htmlFor="confirm">Confirm Password</label>
      <input type="password" name="confirm" id=""  required/>
      </div>

      <input className='btn-submit' type="submit" value="Sign Up" />
   
        </form>

        <p> <small>Already Have an Account? <Link to='/login' >Log in</Link> </small> </p>
      <p className='text-error'>{error}</p>

        </div>
    );
};

export default Signup;