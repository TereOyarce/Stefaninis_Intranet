import React ,{useCallback} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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


    <div>
      <h1>Ingresa tus datos</h1>
      <form onSubmit={handleSubmit}>
      <input placeholder='correo' name='email' type='email' />
      <input placeholder='contraseña' name='password' type='password' />
      <button type='submit'>Login</button>
      </form>
      
    </div>
  )
}



