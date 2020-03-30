import React,{useState} from 'react' ;
import {Link,useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'
import api from '../../services/api';
import './styles.css'

import Logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const res = await api.post('sessions',{id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', res.data.name);

            history.push('/profile');
        }catch(error){
            alert("erro ao tenta login");
        }
    }

    


    return (
        <div className="logon-container">
            <section className="form">
                <img src={Logo} alt="be the heroes"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder= 'Sua ID' 
                    valeu={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className = "back-link">
                        <FiLogIn size={16} color ="#e02041"></FiLogIn>
                        Nâo tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>

    );
}