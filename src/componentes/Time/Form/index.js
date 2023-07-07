import { useState } from 'react'
import Botao from '../../Botao'
import Campo from '../../Campo'
import './form.css'

const TimeForm = ({aoCadastrar}) => {

    const [nome, setNome] = useState('')
    const [cor, setCor] = useState('#000000')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({nome, cor})
    }

    return (
        <section className="time-form-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o time.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do time'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    type={'color'}
                    obrigatorio={true}
                    label='Cor' 
                    placeholder='Digite a cor do time '
                    valor={cor}
                    aoAlterado={valor => setCor(valor)}/>
                <Botao texto='Criar time' />
            </form>
        </section>
    )
}

export default TimeForm