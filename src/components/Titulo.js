// importar estilizacao
import './Titulo.css';

const Titulo = ({nome, stacks, descricao}) => {
  return (
    <div>
        <h1>{nome}</h1>
        <p id="stacks">{stacks}</p>
        <p>{descricao}</p>
    </div>
  )
}

export default Titulo