import React ,{useCallback} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './style/login.css';
import logo from '../assets/img/logo.png';

export const Auth = () => {
  const handleSubmit = useCallback (async e => {
    e.preventDefault();

      const {email, password} = e.target.elements;
      const auth = getAuth()
      try{
        await signInWithEmailAndPassword (auth, email.value, password.value)
      } catch (e){
        alert(e.message)
      }     
    }, [])

  return (


    <div className='login-container'>

      <div className='logo-container'>
        <img src={logo} alt='StefaniniLogo' className='logo-login'/>
      </div>

      <div className='form-container'>
        <div className='form-title'>
      <h1>PORTAL DEL COLABORADOR</h1>
      </div>
      <br/>
      <form className='form-input' onSubmit={handleSubmit}>
      <br/>
      <input placeholder='Email' name='email' type='email' />
      <br/>
      <input placeholder='Contraseña' name='password' type='password' />
      <br/>
      <button type='submit'>INGRESAR</button>
      </form>
      </div>
      
    </div>
  )
}



