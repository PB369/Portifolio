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
      name: "Comic Store",
      image: "../../../imagens/projects/comic-store-show.png",
      description: "Home Page de uma loja de itens sobre personagens da Marvel, DC Comics e animes. Além de sua responsividade, este projeto inclui a utilização de um carrossel, uma tabela e um modal.",
      link: "https://pb369-projects-comic-store.vercel.app/",
      tags: ["React", "Bootstrap", "HTML & CSS", "Sass"]
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