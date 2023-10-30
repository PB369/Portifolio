import './css/Home.scss'

export default function Home() {
    return(
        <header>
            <div id='homeContent'>
                <div id="intro">
                    <p id="welcome">Bem-vindo, meu nome é Pedro &#x1F44B;</p>
                    <h1>Software Engineer</h1>
                    <p id='introParagraph'>Possuindo 1 ano de experiência, já desenvolvi diferentes projetos para as mais variadas finalidades.</p>
                </div>
                <div id="arrowDiv">
                    <div className="material-symbols-outlined">keyboard_arrow_down</div>
                </div>
            </div>
        </header>
    )
}