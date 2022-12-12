import React from 'react'
import { useState, useEffect } from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import { dameCookie } from '../../helpers/cookieHelper';
import { MenuCard } from './MenuCard';

export const MenuList = () => {
  const[menulist, setMenuList] = useState([])
  const[loaded, setLoaded] = useState(false)
  let token = dameCookie();
  let url = `${process.env.REACT_APP_API_URL}/api/menu`;
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
            setLoaded(true)
        });
    }, []);
  return (
    <div className='row'>
      {menulist.map((el, i)=> <MenuCard key={i} menu={el}/>)}
      {(menulist.length === 0 && loaded)&& <h4 style={{margin:"1rem"}}>Aun no tienes menus. crea uno haciendo click en el simbolo +</h4>}
    </div>
  )
}
