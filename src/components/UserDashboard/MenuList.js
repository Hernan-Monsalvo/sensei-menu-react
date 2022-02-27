import React from 'react'
import { useState, useEffect } from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import { dameCookie } from '../../helpers/cookieHelper';
import { MenuCard } from './MenuCard';

export const MenuList = () => {
  const[menulist, setMenuList] = useState([])
  let token = dameCookie();
  let url = "https://menu-semanal-v2.herokuapp.com/api/menu";
  let options = {headers: {"content-type": "application/json", "Authorization": "token "+ token}};
  let api = helpHttp();
  useEffect(() => {
    api.get(url, options).then(
        res => {
            if(!res.err){
              setMenuList(res);
              console.log(res)
            } else {
              console.log("Error al traer menus")
            }
  
        });
    }, []);
  return (
    <div>
      {menulist.map((el, i)=> <MenuCard key={i} menu={el}/>)}
    </div>
  )
}
