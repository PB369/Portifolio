import './css/About.scss'

const listMedias = [
  {
    name: "github",
    path: "../../../imagens/github.png"
  },
  {
    name: "linkedin",
    path: "../../../imagens/linkedin.png",
  },
  {
    name: "instagram",
    path: "../../../imagens/instagram.png"
  },
  {
    name: "whatsapp",
    path: "../../../imagens/whatsapp.png",
  },
  {
    name: "email",
    path: "../../../imagens/email.png"
  }
]

const listTechnologies = ["React", "Bootstrap", "HTML & CSS", "Sass", "JavaScript", "Git & GitHub", "Python", "Arduino"]

const About = () => {

  const medias = listMedias.map((media)=><li key={media.name}><img src={media.path}/></li>)
  const technologies = listTechnologies.map((technology)=><li key={technology}>- {technology}</li>)

  return(
    <section id='about'>
      <h2>Sobre mim</h2>
      <div id="mainContentAbout">
        <div id="textAbout">
          <h3>Minha História</h3>
          <p>Sou um jovem de São Paulo que teve primeiro contato com o mundo da programação na época do ensino fundamental, por volta dos 13 anos de idade.</p>
          <p>Atualmente estou cursando Engenharia de Software na FIAP. Mesmo estando apenas no 2° semestre, já pude aprender sobre diversas tecnologias e me capacitar para ser um bom desenvolvedor.</p>
          <p>Estou disponível para novas oportunidades e permaneço focado em construir meu caminho profissional, vencendo novos desafios a cada dia.</p>
        </div>
        <div id='technologies'>
          <div id='tape'></div>
          <h3>Tecnologias</h3>
          <ul id='listOfTechnologies'>
            {technologies}
          </ul>
        </div>
      </div>
      <div>
        <ul id='listOfMedias'>
          {medias}
          <li><a href='#' target='_blank'>Currículo</a></li>
        </ul>
      </div>
    </section>
  )
}

export default About