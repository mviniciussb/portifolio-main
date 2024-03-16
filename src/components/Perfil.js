// importar modulos
import Curso from './Curso';
import Imagem from './Imagem';
import Titulo from './Titulo';
import Formacao from './Formacao';
import Experiencia from './Experiencia';
import Contato from './Contato';
import Rodape from './Rodape';
import Treinamento from './Treinamento';

import './Perfil.css'

const Perfil = () => {
  return (
    <div>
      <header>
        <Imagem />
        <Titulo
          nome={"Marcos Vinicius"}
          stacks={"{ Java | Node.js | ReactJS | HTML | CSS }"}
          descricao={
            "Estudante de analise e desenvolvimento de sistemas pela UNIT"
          }
        />
      </header>

      <hr />

      <section id="contato" class="dados">
        <h2>Contatos:</h2>
        <Contato
          email={"viniciusmarcos136@gmail.com"}
          telefone1={"(84) 996618221"}
          telefone2={"?"}
          linkedin={"https://www.linkedin.com/in/mviniciussb/"}
          github={"https://github.com/mviniciussb"}
          instagram={"https://www.instagram.com/m.viniciussb"}
          youtube={"http://www.youtube.com/@marcosvinicius3805"}
        />
      </section>

      <hr />

      <section id="formacao" class="dados">
        <h2>Formação Acadêmica</h2>
        <Formacao
          nomeDoCurso={"Graduante como tecnologo em ADS"}
          local={"UNIT"}
        />
        <Formacao nomeDoCurso={"Técnico em informática"} local={"IFRN"} />
        <Formacao
          nomeDoCurso={"Técnico em Redes de Computadores"}
          local={"IFRN"}
        />
      </section>

      <hr />

      <section id="cursos" class="dados">
        <h2>Cursos e Treinamentos</h2>
        <Curso
          nomeDoCurso={"NR-10"}
          duracao={"8 horas"}
          descricao={
            "Curso voltado para a segurança de quem trabalho com eletricidade."
          }
        />
        <Curso
          nomeDoCurso={"NR-35"}
          duracao={"78 Horas"}
          descricao={
            "Curso voltado para quem trabalha em alturas"
          }
        />
      </section>

      <hr />

      <section id="experiencia" class="dados">
        <h2>Experiência Profissional</h2>
        <Experiencia
          cargo={"Reparador e instalador de telecomunicações"}
          instituicao={"BRISANET"}
          periodo={"2020 - Atualmente"}
          atividades={"Suportes em geral a clientes"}
        />
        <Experiencia
          cargo={"Aulixiar de serviços de campo"}
          instituicao={"Brisanet"}
          periodo={"2020 - Atualmente"}
          atividades={
            "Suporte remoto a clientes"
          }
        />
      </section>

      <hr />

      <hr />

      <Rodape />
    </div>
  );
}

export default Perfil