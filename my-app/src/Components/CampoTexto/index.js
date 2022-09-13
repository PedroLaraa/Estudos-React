import './CampoTexto.css'

const CampoTexto = (props) => {

    const propsPlaceholderModificada = `${props.placeholder}...`

    const capturaDados = (e) => {
        props.valorAlterado(e.target.value)
    };

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input
            value={props.valor} 
            required={props.obrigatorio} 
            placeholder={propsPlaceholderModificada}
            onChange={capturaDados}
            ></input>
        </div>
    );
};

export default CampoTexto;