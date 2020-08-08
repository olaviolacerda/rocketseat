import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import './styles.css';

import camera from '../../assets/camera.svg';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState([]);
  const [price, setPrice] = useState('');

  const preview = useMemo(() => (thumbnail ? URL.createObjectURL(thumbnail) : null), [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    const user_id = localStorage.getItem('user');

    await api.post('/spots', data, {
      headers: { user_id },
    });

    history.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={(event) => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        type="text"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />

      <label htmlFor="techs">
TECNOLOGIAS *
        <span>(separadas por vírgulas)</span>
      </label>
      <input
        id="techs"
        type="text"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={(event) => setTechs(event.target.value)}
      />

      <label htmlFor="price">
PREÇO
        <span>(em branco para GRATUITO)</span>
      </label>
      <input
        id="price"
        type="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">Cadastrar</button>
    </form>
  );
}
