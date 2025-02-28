import { Link } from 'react-scroll'
import './css/Home.scss'

const Home = () => {
    return(
        <header id='home'>
            <div id='homeContent'>
                <div id="intro">
                    <p id="welcome">Bem-vindo, meu nome é Pedro &#x1F44B;</p>
                    <h1>Software Engineer</h1>
                    <p id='introParagraph'>Entusiasta de tecnologia com experiência aplicada em diversas soluções e projetos.</p>
                </div>
                <div id="arrowDiv">
                    <Link activeClass="active"spy={true}to="about"smooth={true}duration={1000}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 -960 960 960" width="128" id='arrowSVG'><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" id='arrow'/></svg>
                    </Link>
                    
                </div>
            </div>
        </header>
    )
}

export default Home