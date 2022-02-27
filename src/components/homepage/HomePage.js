import { Carrousel } from "./Carrousel";
import { Cards } from "./Cards";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import '../../static/style/style.css'
import { RegisterModal } from "./RegisterModal";
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { helpHttp } from "../../helpers/helpHttp";

function HomePage() {
  const [logged, setlogged] = useState(false);
  const navigate = useNavigate()
  let api = helpHttp();


  function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

const dameCookie = () => {
    let token = getCookie("token")
    if(token === null){
        return false
    } else {
        console.log(token)
        return token
    }
}

  useEffect(() => {
    let token = dameCookie();
    api.get("https://menu-semanal-v2.herokuapp.com/api/ping");
    if(token){
      setlogged(true);
    } else {
      setlogged(false);
    }

    }, []);

    const logOut = () => {
      document.cookie = 'token=; Max-Age=0; SameSite=None; Secure'
      window.location.reload();
  }

  return (
    <div>
      <Navbar logged={logged} logOut={logOut}/>
      <Carrousel logged={logged}/>
      <Cards/>
      <Footer/>
      <RegisterModal/>
    </div>
  );
}

export default HomePage;
