import './css/About.scss'

const About = () => {

  const listMedias = [
    {
      name: "github",
      path: "../../../imagens/github.png",
      link: "https://github.com/PB369"
    },
    {
      name: "linkedin",
      path: "../../../imagens/linkedin.png",
      link: "https://www.linkedin.com/in/pedro-barros-322191193/"
    },
    {
      name: "instagram",
      path: "../../../imagens/instagram.png",
      link: "https://www.instagram.com/pedro.b18_/"
    },
    {
      name: "whatsapp",
      path: "../../../imagens/whatsapp.png",
      link: " https://wa.me/5511977767889"
  
    },
    {
      name: "email",
      path: "../../../imagens/email.png",
      link: "mailto:pedrohbarros369@gmail.com"
    }
  ]

  const listTechnologies = ["React", "Bootstrap", "HTML & CSS", "Sass", "JavaScript", "Git & GitHub", "Python"]

  const medias = listMedias.map(media =>
  <li key={media.name}>
    <a href={media.link} target={"_blank"} rel="noreferrer">
      <img 
      src={media.path}
      draggable="false"/>
    </a>
  </li>)
  
  const technologies = listTechnologies.map(technology => <li key={technology}>- {technology}</li>)

  return(
    <section id='about'>
      <h2>Sobre mim</h2>
      <div id="mainContentAbout">
        <div id="textAbout">
          <h3>Minha História</h3>
          <p>Sou um jovem de São Paulo que teve primeiro contato com o mundo da programação na época do ensino fundamental, por volta dos 13 anos de idade.</p>
          <p>Atualmente estou cursando Engenharia de Software na FIAP. Mesmo estando apenas no 3° semestre, já pude aprender sobre diversas tecnologias e me capacitar para ser um bom desenvolvedor.</p>
          <p>Estou disponível para novas oportunidades e permaneço focado em aperfeiçoar minha jornada profissional, vencendo novos desafios a cada dia.</p>
        </div>
        <div id='technologies'>
          <div id='tape'></div>
          <h3>Tecnologias</h3>
          <ul id='listOfTechnologies'>
            {technologies}
          </ul>
        </div>
        <div id='medias'>
          <ul id='listOfMedias'>
            {medias}
          </ul>
          <a href='../../../Curriculo-Pedro-Barros-Desenvolvedor-Front-End.pdf' target='_blank' id='resume'>Currículo</a>
        </div>
      </div>
    </section>
  )
}

export default About