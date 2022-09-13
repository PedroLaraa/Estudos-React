import Colaborador from '../Colaborador';

import './Times.css'

const Times = (props) => {

    return (

        (props.colaboradores.length > 0) ? 
            <section className='times' style={{ backgroundColor: props.corSecundaria }}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nomeDoTime}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => <Colaborador
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                    )}
                </div>
            </section> 
        : ''

    );
};

export default Times;
