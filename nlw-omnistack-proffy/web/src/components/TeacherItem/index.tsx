import React from 'react'

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/18356605?s=400&u=b9a92fe76104a2c801bb1578a8d8b8c9eabafa33&v=4" alt="Olavio Lacerda" />
        <div>
          <strong>Olavio Lacerda</strong>
          <span>Piada ruim</span>
        </div>
      </header>

      <p>Texto legal, posso ensinar a contar as piores piadas e ainda fazer as pessoas rirem de verdade.</p>

      <footer>
        <p>
          Preço/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
};

export default TeacherItem;