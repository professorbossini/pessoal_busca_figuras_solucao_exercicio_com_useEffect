import React, { Component, useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
//o uso de hooks requer componentes funcionais!!
const Busca = (props) => {
    const [termoDeBusca, setTermoDeBusca] = useState('')
    const atualizarTermoDeBusca = (e) => {
        setTermoDeBusca(e.target.value)
    }
    //warning sugere desestruturar pois props muda sempre
    const {onBuscaRealizada} = props
    useEffect(() => {
        let timeoutID
        if (termoDeBusca && termoDeBusca.length >= 3)
           timeoutID = setTimeout(() => onBuscaRealizada(termoDeBusca), 2000)
        
        return () => {
            clearTimeout(timeoutID)
        }
        //warning sugere especificar todas as dependências, mesmo a função. Neste caso, não faz diferença
    }, [termoDeBusca, onBuscaRealizada])
    return (
            <div className="flex flex-column">
                {/* ícone à esquerda, largura máxima */}
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-search"/>
                    <InputText
                        value={termoDeBusca}
                        //largura máxima
                        onChange={atualizarTermoDeBusca}
                        className="w-full"
                    />
                </span>                
            </div>
    )
}
// export default class Busca extends Component {
//     state = {
//         termoDeBusca: ''
//     }
//     onTermoAlterado = (event) => {
//         console.log(event.target.value)
//         this.setState({termoDeBusca: event.target.value})
//     }

//     onFormSubmit = (event) => {
//         //não deixa o navegador submeter o form
//         event.preventDefault()
//         this.props.onBuscaRealizada(this.state.termoDeBusca)

//     }

//     render() {
        
//     }
// }

export default Busca

Busca.defaultProps ={
    dica: 'Digite algo que deseja ver...'
}