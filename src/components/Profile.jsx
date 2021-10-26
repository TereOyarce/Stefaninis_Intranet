import React from "react";
import './style/profile.css';
import profileDefault from '../assets/img/profiledefault.png'
import { useState } from "react";
import { db } from '../fbConfig';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";



export const Profile = () => {

  const [name, setName] = useState('tere');
  const [rut, setRut] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [familiar, setFamiliar] = useState('');
  const [tshirt, setTshirt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const addData = async () => {
      const dataProfile = {
        name: name,
        rut: rut,
        gender: gender,
        birthday: birthday,
        address: address,
        phone: phone,
        familiar: familiar,
        tshirt: tshirt,
      }
    //  await setDoc(doc(db, "users", rut), dataProfile);


      const usersCol = collection(db, 'users');

      const userProfile = await addDoc(usersCol, {...dataProfile});
      console.log(userProfile.id);
    };
    addData()



      .then(() => {
        alert("Guardado correctamente");
      })
      .catch((error) => {
        console.log(error.message);

      })
  };
  return (
    <div className="container-profile">

<div className='header-profile'><h1>Mi Perfil</h1></div>

<div className='body-profile'>
      
      <img src={profileDefault} alt="profile image" className='profile-img' />

      <form onSubmit={handleSubmit}>
        <label >Nombre </label>
        <input type="text" className='input-profile' name="name" placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
        <label >RUT </label>
        <input type="number" className='input-profile' name="rut" placeholder='Rut' value={rut} onChange={(e) => setRut(e.target.value)} />
        <label >Género </label>
        <input type="text" className='input-profile' name="gender" placeholder='Género' value={gender} onChange={(e) => setGender(e.target.value)} />
        <label >Fecha de Nacimiento </label>
        <input type="date" className='input-profile' name="birthday" placeholder='Fecha de Nacimiento' value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        <label >Dirección </label>
        <input type="text" className='input-profile' name="address" placeholder='Dirección' value={address} onChange={(e) => setAddress(e.target.value)} />
        <label >Teléfono</label>
        <input type="tel" className='input-profile' name="phone" placeholder='Teléfono' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label >Carga Familiar </label>
        <input type="text" className='input-profile' name="familiar" placeholder='Carga Familiar' value={familiar} onChange={(e) => setFamiliar(e.target.value)} />
        <select name="t-shirt" id="t-shirt" value={tshirt} onChange={(e) => setTshirt(e.target.value)}>
          <option value="">Talla de Polera</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
        <button type="submit" className='profile-button'>GUARDAR</button>
      </form>
      </div>
    </div>
  )
}
