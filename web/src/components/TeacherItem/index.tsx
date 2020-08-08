import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/67074822?s=400&u=afb73282657a86cb0abec4342b656297a82b71d5&v=4" alt="João Vitor Müller"/>
                <div>
                    <strong>João Vitor Müller</strong>
                    <span>Desenvolvimento Web</span>
                </div>
            </header>

            <p>
                Entusiasta das tecnologias de desenvolvimento web.
                <br /><br />
                Apaixonado por desenvolver aplicações web tanto no backend quanto no frontend.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;