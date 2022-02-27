import React from 'react'
import { useState, useRef } from "react";
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';
import { Loader } from './Loader';

export const RegisterModal = () => {
    const [answer, setAnswer] = useState("login");
    const [loading, setLoading] = useState(false)
    const loginTab = () => setAnswer("login");
    const registerTab = () => setAnswer("register");
    const closeRef = useRef();

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
            console.log("no token")
        } else {
            console.log(token)
        }
    }

  return (
    <>
        <div className="modal fade" id="registerModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header switch-field">
                        <input type="radio" name="modal_choice" id="register_radio" value="register" onClick={registerTab}/>
                        <label htmlFor="register_radio">Registro</label>

                        <input type="radio" name="modal_choice" id="login_radio" value="login" onClick={loginTab} defaultChecked/>
                        <label htmlFor="login_radio">Login</label>

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closeRef}></button>
                </div>
                <div className="modal-body">
                    {answer==="login" ? <LoginForm closeBtn={closeRef}/> : <RegisterForm closeBtn={closeRef}/>}

                </div>
                </div>

            </div>
        </div>
    </>
  )
}
