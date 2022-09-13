import { useState } from 'react';

import './Formulario.css';

import CampoTexto from '../CampoTexto';
import SelectForm from '../SelectForm';
import Botao from '../Botao';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const envioDeFormulario = (e) => {
        e.preventDefault();
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
    };

    return(
        <section className='formulario'>
            <form onSubmit={envioDeFormulario}>
                <h2>Preencha os dados para criar o card do colaborador: </h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor = {nome}
                    valorAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor = {cargo}
                    valorAlterado = {valor => setCargo(valor)}
                />
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem'
                    valor =  {imagem}
                    valorAlterado = {valor => setImagem(valor)}
                />
                <SelectForm 
                    obrigatorio={true} 
                    label='Times' 
                    itens={times}
                    valor = {time}
                    valorAlterado = {valor => setTime(valor)}
                />
                <Botao textoBotao='Cadastrar' />
            </form>
        </section>
    );
};

export default Formulario;
