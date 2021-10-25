import React, { useState } from "react";
import "./style/searchbar.css";
import { Icon } from '@iconify/react';

export const Searchbar = ({ word, inputClass }) => {
  const [searchText, setsearchText] = useState("");
  const [suggest, setSuggets] = useState([]);
  const [wordfound, setwordfound]= useState(true);

  const barChange = (e) => {
    let searchValue = e.target.value;
    let suggestion = [];
    if(searchValue.length > 0){
      suggestion = word
      .sort()
      .filter((e)=> e.toLowerCase().includes(searchValue.toLowerCase()));
    setwordfound(suggestion.length !== 0 ? true : false);
    }
    setSuggets(suggestion);
    setsearchText(searchValue)
  };
  const suggestedText =(value)=>{
    console.log(value);
    setsearchText(value);
    setSuggets([]);
  };

  const getSuggestions = () =>{
    if(suggest.length===0 && searchText!=="" && !wordfound){
      return <p>Intenta con otro concepto</p>;
    }

    return(
      <ul>
          {suggest.map((item,index)=>{
            return(
              <div key={index}>
                <li onClick={()=>suggestedText(item)}>{item}</li>
                {index !== suggest.length -1 && <hr />}
              </div>
            );
          })}
      </ul>
    );
  };
  return (
    <div className="container-search">
      <input
        type="text"
        placeholder="Buscar"
        className={inputClass}
        value= {searchText}
        onChange={barChange}
      />
      {getSuggestions()}
    </div>
  );
};
