
const Experiencia = ({cargo,instituicao,periodo,atividades}) => {
  return (
    <div>
        <h3>{cargo}</h3>
        <p>{instituicao} - {periodo}</p>
        <p>{atividades}</p>
    </div>
  )
}

export default Experiencia