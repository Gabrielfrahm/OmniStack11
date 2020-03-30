import React, {useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import './styles.css';

import Logo from '../../assets/logo.svg';

import api from '../../services/api';
export default function Register(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data ={
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try{
            const res = await api.post('ongs' , data);
            alert (`seu ID de acesso ${res.data.id}`);
            history.push('/');
        }catch(error){
            alert('erro no cadastro, tente novamente')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="BE THE HERO"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a econtrar os casos da sua ONG.</p>
                    <Link to="/" className = "back-link">
                        <FiArrowLeft size={16} color ="#e02041"></FiArrowLeft>
                        Nâo tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome Da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input placeholder="e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />
                    
                    <div className="input-group">
                        <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{width:80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}