import './css/Home.scss'

const Home = () => {
    return(
        <header>
            <div id='homeContent'>
                <div id="intro">
                    <p id="welcome">Bem-vindo, meu nome é Pedro &#x1F44B;</p>
                    <h1>Software Engineer</h1>
                    <p id='introParagraph'>Possuindo 1 ano de experiência, já desenvolvi diferentes projetos para as mais variadas finalidades.</p>
                </div>
                <div id="arrowDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 -960 960 960" width="128" id='arrowSVG'><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" id='arrow'/></svg>
                </div>
            </div>
        </header>
    )
}

export default Home