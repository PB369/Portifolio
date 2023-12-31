import './css/Projects.scss'

const Projects = () => {

  const listProjects = [
    {
      name: "Boreal Tech Store",
      image: "../../../imagens/projects/boreal-tech-store-show.png",
      description: "Home Page voltado para uma loja de vendas de smartphones e tablets. Com um toque minimalista e moderno, o projeto é responsivo para todos os dispositivos.",
      link: "https://pb369-projects-boreal-tech-store.vercel.app/",
      tags: ["HTML & CSS"]
    },
    {
      name: "PomodoroTimer",
      image: "../../../imagens/projects/pomodorotimer-show.png",
      description: "Temporizador totalmente funcional, incluindo seleção de diferentes alarmes, voltado para facilitar a prática do método Pomodoro.",
      link: "https://pb369-projects-pomodorotimer.vercel.app/",
      tags: ["HTML & CSS", "JavaScript", "Sass"]
    },
    {
      name: "Green Way",
      image: "../../../imagens/projects/green-way-show.png",
      description: "Single Page Application destinada a oferecer um serviço de conversão de moedas, utilizando-se de uma API. Além disso, a aplicação oferece uma funcionalidade de Click and Copy para os valores monetários.",
      link: "https://pb369-projects-green-way.vercel.app/",
      tags: ["React", "HTML & CSS", "Sass", "Figma"]
    }
  ]

  const projects = listProjects.map(project =>
    <div key={project.name} className='projectItem'>
      <img src={project.image} alt='Imagem do Projeto'/>
      <div className='aboutProject'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div key={project.name + " tags"} className="tags">
          {project.tags.map(tag =>
          <span key={tag}>{tag}</span>
        )}</div>
        <a className='accessProjectButton' href={project.link}target='_blank' rel='noreferrer'>Acessar</a>
      </div>
    </div>
  )

  return (
    <section id='projects'>
      <h2>Projetos</h2>
      <div id="mainContentProjects">
        {projects}
      </div>
    </section>
  )
}
export default Projects