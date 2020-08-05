import React from 'react';
import whatssapIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {

    return (
    
    <article className="teacher-item">
        <header>
            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9sJnhrEqKxh4gkNs9AQqeD1Fo831MLu4sw29nM=s83-c-mo" alt="Vinicio Miranda Covalski" />
            <div>
                <strong>Vinicio Miranda Covalski</strong>
                <span>Telecom</span>

            </div>
        </header>
        <p> TEXTO DE EXEMPLO
      <br /><br />
      TEXTO EXEMPLO TEXTO EXEMPLO TEXTO EXEMPLO
    </p>

        <footer>
            <p>Preço/hora

            <strong>R$ 50,00</strong>
            </p>
            <button type="button">
                <img src={whatssapIcon} alt="Whatssap" />
            Entrar em contato
        </button>
        </footer>

    </article>
    );
}

export default TeacherItem;