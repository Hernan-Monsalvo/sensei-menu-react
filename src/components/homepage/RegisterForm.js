import React from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import {useState, useEffect, } from 'react';
import { ErrorMsg } from './ErrorMsg';
import { Loader } from './Loader';
import { useNavigate } from 'react-router-dom'

const initialForm = {
    name: "",
    email: "",
    password: "",
    password2: ""
}

export const RegisterForm = ({closeBtn}) => {
    const[form, setForm] = useState(initialForm);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    let api = helpHttp();

    let url = `${process.env.REACT_APP_API_URL}/api/register`;
    const navigate = useNavigate()
    
    const register = (data) => {
        let options = {body:data, headers: {"content-type": "application/json"}};
        api.post(url, options).then((res)=>{
            if(!res.err){
                console.log(res)
                setError(null)
                registerLogin(data)
            } else {
                console.log(res);
                setError(res)
                setLoading(false);
            }
            
        });
        //console.log(data);
    }

    const registerLogin = (data) =>{

        let options = {body:data, headers: {"content-type": "application/json"}};
        api.post(`${process.env.REACT_APP_API_URL}/api/login`, options).then((res)=>{
            if(!res.err){
                document.cookie = `token=${res.token}; SameSite=None; path='/'; Secure`;
                setError(null)
                setLoading(false);
                console.log("usuario logeado: " + res.token)
                closeBtn.current.click()
                navigate('/dashboard/menus')
            } else {
                console.log(res);
                setError(res)
            }
            setLoading(false);
        });
    }

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);
        if (!form.email || !form.password){
            let err = {
                err:true,
                status: 498,
                statusText: "Empty fields"
            }
            setError(err)
            setLoading(false);
            return;
        }
        if (form.password !== form.password2){
            let err = {
                err:true,
                status: 499,
                statusText: "Password mismatch"
            }
            setError(err)
            setLoading(false);
            return;
        }
        register(form);
    }
    const handleReset = (e) =>{
        setForm(initialForm);
    };

  return (
    <form onSubmit={handleSubmit}>
        {error && <ErrorMsg statusCode={error.status}/>}
        {loading && <Loader/>}
        <div className="mb-3">
            <label htmlFor="name" className="col-form-label">Nombre:</label>
            <input type="text" className="form-control" id="name" name="name" onChange={handleChange} value={form.name}/>
        </div>
        <div className="mb-3"></div>
        <div className="mb-3">
            <label htmlFor="email" className="col-form-label">Email:</label>
            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={form.email}/>
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="col-form-label">Contraseña:</label>
            <input type="password" className="form-control" id="password" name="password" onChange={handleChange} value={form.password}/>
        </div>
        <div className="mb-3">
        <label htmlFor="password2" className="col-form-label">Repite la Contraseña:</label>
            <input type="password" className="form-control" id="password2" name="password2" onChange={handleChange} value={form.password2}/>
        </div>
        <input type="submit" className="form-control btn btn-primary" value="Registrarse" />
    </form>
  )
}
