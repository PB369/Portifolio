import './css/Footer.scss'

const Footer = () => {
  const listMedias = [
    {
      name: "github",
      path: "../../../imagens/github.png",
      link: "https://github.com/PB369"
    },
    {
      name: "linkedin",
      path: "../../../imagens/linkedin.png",
      link: "https://www.linkedin.com/in/pebarros/"
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

  const medias = listMedias.map(media =>
    <li key={media.name}>
      <a href={media.link} target={"_blank"} rel="noreferrer">
        <img 
        src={media.path}
        draggable="false"/>
      </a>
    </li>)

  return (
    <footer>
      <div id="authorBrand">
        <p>&copy; 2025 Pedro Barros</p>
        <p>Todos os direitos reservados.</p>
      </div>
      <div id='medias'>
        <ul id="listOfMedias">
          {medias}
        </ul>
      </div>
    </footer>
  )
}

export default Footer