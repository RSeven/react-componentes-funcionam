import './colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborador = ({ colaborador, corDeFundo, onDeleteColaborador, onClickFavorito }) => {
    const propsFavorito = {
        onClick: () => onClickFavorito(colaborador),
        size: 25
    }

    return (<div className="colaborador">
        <div className='delete' onClick={() => onDeleteColaborador(colaborador.id)}>
            <AiFillCloseCircle size={25} />
        </div>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favorito'>
                { colaborador.favorito ? <AiFillHeart {...propsFavorito} style={{ color: 'red' }} /> : <AiOutlineHeart {...propsFavorito} /> }
            </div>
        </div>
    </div>)
}

export default Colaborador