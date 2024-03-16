// estilizar
import './Contato.css'

const Contato = ({email, telefone1, telefone2, linkedin, github, instagram, youtube}) => {
  return (
    <div>
        <p>E-mail: {email} </p>
        <p>Telefone (WhatsApp): {telefone1} / {telefone2}</p>
        <p>LinkedIn: <a href={linkedin}>{linkedin}</a></p>
        <p>Github: <a href={github}>{github}</a></p>
        <p>Instagram: <a href={instagram}>{instagram}</a></p>
        <p>Youtube: <a href={youtube}>{youtube}</a></p>
    </div>
  )
}

export default Contato