import './SelectForm.css'

const SelectForm = (props) => {

    return(
        <div className='selectForm'>
            <label>{props.label}</label>
            <select
            onChange={e => props.valorAlterado(e.target.value)}
            required={props.obrigatorio}
            >
                {props.itens.map(v => <option key={v}>{v}</option>)}
            </select>
        </div>
    )

};

export default SelectForm
