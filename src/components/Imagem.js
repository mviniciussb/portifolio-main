import './Imagem.css';
import perfil from '../img/perfil.jpg';

const Imagem = () => {
  return (
    <figure>
        <img src={perfil} alt="Imagem de Perfil de Marcos Vinicius" title="Marcos Vinicius"></img>
    </figure>
  )
}

export default Imagem