import React, { useState } from 'react';

import api from "../../services/api";
import logo from '../../assets/logo.svg';
import { Container, Form, Logo, Input, Enter } from './styles';

export default function Login({ history }) {

const [ username, setUsername ] = useState('');

  async function Login(e) {
    e.preventDefault();

    const response = await api.post('devs', {
      username,
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }


  return (
    <Container>
      <Form onSubmit={Login}>
      <Logo src={logo} alt="Tindev"/>
        <Input
          placeholder="Digite seu usuário no Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Enter type="submit">Login</Enter>
      </Form>
    </Container>
  );
}
