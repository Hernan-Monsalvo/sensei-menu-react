import React, {useState, useEffect, useRef} from 'react'
import { Navbar } from '../homepage/Navbar'
import { EditModal } from './EditModal'
import { MenuConfig } from './MenuConfig'
import { MenuPreview } from './MenuPreview'
import { dameCookie } from '../../helpers/cookieHelper';
import { helpHttp } from '../../helpers/helpHttp';
import { ConfirmModal } from './ConfirmModal'
import { useNavigate } from 'react-router-dom'

export const MenuCreatorPage = () => {
  const[preview, setPreview] = useState([])
  const[itemToEdit, setitemToEdit] = useState("")
  const[posToEdit, setPosToEdit] = useState(false)
  const[dishes, setDishes] = useState([])
  const[edit, setEdit] = useState(false);
  const editRef = useRef();
  let api = helpHttp();
  const navigate = useNavigate()

  const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
    ]

    let token = dameCookie();
    let url = `${process.env.REACT_APP_API_URL}/api/dish`;
    let options = {headers: {"content-type": "application/json", "Authorization": "token "+ token}};
    useEffect(() => {
      api.get(url, options).then(
          res => {
              if(!res.err){
                setDishes(res);
              } else {
                console.log("Error al traer platos")
              }

          });
      }, []);

  const createMenu = () => {

    let data = []
    preview.forEach((day, i)=>{
      data[i] = day.lunch ? day.lunch.id : null;
      data[i+7] = day.dinner ? day.dinner.id : null;
    })

    let menu_url = `${process.env.REACT_APP_API_URL}/api/menu`;
    let options = {body:{config: data}, headers: {"content-type": "application/json", "Authorization": "token "+ token}};
    api.post(menu_url, options).then(
      res => {
          if(!res.err){
            console.log(res);
            navigate("/dashboard/menus")
          } else {
            console.log("Error al traer platos")
          }

      });
  }

  const logOut = () => {
        document.cookie = 'token=; Max-Age=0; SameSite=None; Secure'
        navigate("/")
    }
  const editItem = (item, pos) => {
      setitemToEdit(item)
      setPosToEdit(pos)
  }
    const initialPreview = (res) => {

      let data = days.map((e, i)=> ({"day": e, "lunch": res.data[i], "dinner": res.data[i+7]}))
      console.log(data)
      setPreview(data)
  }
  return (
    <div>
        <Navbar logged={true} logOut={logOut}/>
        <MenuConfig preview={initialPreview}/>
        <MenuPreview preview={preview} editItem={editItem} editRef={editRef} edit={edit} setEdit={setEdit}/>
        <EditModal preview={preview} dishes={dishes} setPreview={setPreview} posToEdit={posToEdit} itemToEdit={itemToEdit} setEdit={setEdit}/>
        <ConfirmModal createMenu={createMenu}/>
    </div>
  )
}
