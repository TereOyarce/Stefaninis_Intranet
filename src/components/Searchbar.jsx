import React from 'react';
import './style/searchbar.css';
import { Icon } from '@iconify/react';

export const Searchbar = () => {

  const handleChange = (e) =>{
    let searchValue = e.target.value;
    console.log(searchValue)
  }
  return (
    <div className='container-search'>
      <input type='text' placeholder='Buscar...' className='inputSearch' onChange={handleChange} />
      
    </div>
  )
}
