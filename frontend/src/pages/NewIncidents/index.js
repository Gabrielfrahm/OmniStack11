import React ,{useState} from 'react';

import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';
import Logo from '../../assets/logo.svg';


import './styles.css';

export default function NewIncidents(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value , setValue] = useState('');
    const history = useHistory();

    const ongId = localStorage.getItem('ongId')

    async function handleNewIncidents(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try{
            await api.post('incidents', data, {
                headers:{
                    authorization : ongId,
                }
            })
            history.push('/profile')
        }catch(error){
            alert("Erro ao Cadastrar Caso");
        }
    }

    return(
        <div className="new-incidents-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="BE THE HERO"/>
                    <h1>Cadastra novo caso</h1>
                    <p>Descreva  o caso detalhado para encontrar um heroi para resolver isso.</p>
                    <Link to="/profile" className = "back-link">
                        <FiArrowLeft size={16} color ="#e02041"></FiArrowLeft>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncidents}>
                    <input 
                    placeholder="Titulo do caso"
                    valeu={title}
                    onChange={e=>setTitle(e.target.value)}
                    />

                    <textarea 
                    placeholder="Descrição"
                    valeu={description}
                    onChange={e=>setDescription(e.target.value)}
                    />

                    <input 
                    placeholder="valor em reais"
                    valeu={value}
                    onChange={e=>setValue(e.target.value)}
                    />
                    

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}