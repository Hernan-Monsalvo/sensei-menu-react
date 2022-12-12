import React from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import {useState, useEffect} from 'react';
import { ErrorMsg } from './ErrorMsg';
import { Loader } from './Loader';
import { useNavigate } from 'react-router-dom'

const initialForm = {
    email: "",
    password: ""
}

export const LoginForm = ({closeBtn}) => {
    const[form, setForm] = useState(initialForm);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let api = helpHttp();
    let url = `${process.env.REACT_APP_API_URL}/api/login`;

    const navigate = useNavigate()

    const login = (data) => {

        let options = {body:data, headers: {"content-type": "application/json"}};
        api.post(url, options).then((res)=>{
            if(!res.err){
                document.cookie = `token=${res.token}; SameSite=None; path='/'; Secure`;
                console.log("usuario logeado: " + res.token)
                setError(null)
                setLoading(false);
                closeBtn.current.click()
                navigate('dashboard/menus')
            } else {
                console.log(res);
                setError(res)
                setLoading(false);
            }
        });
        //console.log(data);
    }

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) =>{
        setLoading(true);
        e.preventDefault();
        if (!form.email || !form.password){
            alert("Datos incompletos");
            return;
        }
        login(form);
  
    }
    const handleReset = (e) =>{
        setForm(initialForm);
    };
  return (
    <form onSubmit={handleSubmit}>
        {error && <ErrorMsg statusCode={error.status}/>}
        {loading && <Loader/>}
        <div className="mb-3">
            <label htmlFor="email" className="col-form-label">Email:</label>
            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={form.email}/>
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="col-form-label">Contraseña:</label>
            <input type="password" className="form-control" id="password" name="password" onChange={handleChange} value={form.password}/>
        </div>

        <input type="submit" className="form-control btn btn-primary" value="Ingresar" />
    </form>
  )
}
