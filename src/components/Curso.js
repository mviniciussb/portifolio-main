const Cursos = ({nomeDoCurso, duracao, descricao}) => {
  return (
    <div>
        <h3>{nomeDoCurso} - {duracao}</h3>
        <p>{descricao}</p>
    </div>
  )
}

export default Cursos