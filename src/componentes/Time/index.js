import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, colaboradores, onDeleteColaborador, onChangeCor, onClickFavorito }) => {
    return (
        colaboradores.length > 0 &&
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.6) }}>
            <input onChange={(event) => onChangeCor(event.target.value, time.id)} value={time.cor} type='color' className='color-input' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} onDeleteColaborador={onDeleteColaborador} onClickFavorito={onClickFavorito} />)}
            </div>
        </section>

    )
}

export default Time