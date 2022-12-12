import React from 'react'
import { useState, useEffect } from 'react'
import { dameCookie } from '../../helpers/cookieHelper'
import { helpHttp } from '../../helpers/helpHttp'
import { useParams } from 'react-router-dom'
import { MenuTableDish } from './MenuTableDish'
import { Link } from 'react-router-dom'
import download from 'downloadjs'

const default_menu = {
  start_day: "",
  mon_lun: "",
  tue_lun: "",
  wed_lun: "",
  thu_lun: "",
  fri_lun: "",
  sat_lun: "",
  sun_lun: "",
  mon_din: "",
  tue_din: "",
  wed_din: "",
  thu_din: "",
  fri_din: "",
  sat_din: "",
  sun_din: ""

}

export const MenuDetail = () => {
    const[menu, setMenu] = useState(default_menu)
    const[loaded, setLoaded] = useState(false)
    const params = useParams()
    let token = dameCookie();
    let menu_id = params.id
    let url = `${process.env.REACT_APP_API_URL}/api/menu/`+ menu_id;
    let options = {headers: {"content-type": "application/json", "Authorization": "token "+ token}};
    let api = helpHttp();
    useEffect(() => {
      api.get(url, options).then(
          res => {
              if(!res.err){
                setMenu(res);
                console.log("response")
                console.log(res)
              } else {
                console.log("Error al traer menu")
              }
    
          });
          api.get(url+"/list", options).then(
            res => {
                if(!res.err){
                  console.log("response")
                  console.log(res)
                } else {
                  console.log("Error al traer lista")
                }
                setLoaded(true)
            });
      }, []);

      function menuPdf(){
        downloadFile(token, url+"/pdf")
      }
      function listaPdf(){
        downloadFile(token, url+"/list/pdf")
      }

      function downloadFile(token, file_url) {
        return fetch(file_url, {
          method: 'GET',
          headers: {
            'Authorization': "token "+ token
          }
        }).then(function(resp) {
          return resp.blob();
        }).then(function(blob) {
          download(blob);
        });
      }
      if (loaded){
  return (
    <div className="card text-center mx-2 my-2" style={{overflow:"auto"}}>
    <div className="card-header">
      {menu.start_day}
    </div>
    <div className="card-body"> 
    <table className="table">
    <thead>
      <tr>
      <th scope="col">#</th>
        <th scope="col">Lunes</th>
        <th scope="col">Martes</th>
        <th scope="col">Miercoles</th>
        <th scope="col">Jueves</th>
        <th scope="col">Viernes</th>
        <th scope="col">Sabado</th>
        <th scope="col">Domingo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <th scope="col">Almuerzo</th>
        <td scope="col">{menu.mon_lun && <MenuTableDish dish={menu.mon_lun}/>}</td>
        <td scope="col">{menu.tue_lun && <MenuTableDish dish={menu.tue_lun}/>}</td>
        <td scope="col">{menu.wed_lun && <MenuTableDish dish={menu.wed_lun}/>}</td>
        <td scope="col">{menu.thu_lun && <MenuTableDish dish={menu.thu_lun}/>}</td>
        <td scope="col">{menu.fri_lun && <MenuTableDish dish={menu.fri_lun}/>}</td>
        <td scope="col">{menu.sat_lun && <MenuTableDish dish={menu.sat_lun}/>}</td>
        <td scope="col">{menu.sun_lun && <MenuTableDish dish={menu.sun_lun}/>}</td>
      </tr>
      <tr>
       <th scope="col">Cena</th>
        <td scope="col">{menu.mon_din && <MenuTableDish dish={menu.mon_din}/>}</td>
        <td scope="col">{menu.tue_din && <MenuTableDish dish={menu.tue_din}/>}</td>
        <td scope="col">{menu.wed_din && <MenuTableDish dish={menu.wed_din}/>}</td>
        <td scope="col">{menu.thu_din && <MenuTableDish dish={menu.thu_din}/>}</td>
        <td scope="col">{menu.fri_din && <MenuTableDish dish={menu.fri_din}/>}</td>
        <td scope="col">{menu.sat_din && <MenuTableDish dish={menu.sat_din}/>}</td>
        <td scope="col">{menu.sun_din && <MenuTableDish dish={menu.sun_din}/>}</td>
      </tr>
    </tbody>
  </table>
  <Link to="/dashboard/menus" className="btn btn-primary mx-1">Volver</Link>
  <button onClick={listaPdf} className="btn btn-success mx-1">Lista de compras</button>
  <button onClick={menuPdf} className="btn btn-success mx-1">PDF</button>
    </div>
  
  </div>
  )} else {
    return (<div></div>)
  }
}
