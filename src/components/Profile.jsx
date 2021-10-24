import React from "react";
import './style/profile.css';
import profileDefault from '../assets/img/profiledefault.png'

export const Profile= () =>{
  return(
    <div className="container-profile">

      <h1>Mi Perfil</h1>
      <img src={profileDefault} alt="profile image" className='profile-img' />
     <form >
       <input type="text" name="name" placeholder='Nombre' />
       <input type="text" name="rut" placeholder='Rut' />
       <input type="text" name="gender" placeholder='Género' />
       <input type="text" name="birthday" placeholder='Fecha de Nacimiento' />
       <input type="text" name="address" placeholder='Dirección' />
       <input type="text" name="phone" placeholder='Teléfono' />
       <input type="text" name="familiar" placeholder='Carga Familiar' />
      <select name="t-shirt" id="t-shirt">
        <option value="">Talla de Polera</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
      </select>
     </form>
    </div>
  )
}