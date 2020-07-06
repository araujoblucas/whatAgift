import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import './styles.css';
import Nav from '../../components/NavBar';
import Divider from '@material-ui/core/Divider';
import BackgroundImageSection1 from '../../img/Section1.png';


export default function Home({routeName}) {


    const posts = [
        {
            "id": 1,
            "titulo": "Dia dos Namorados",
            "imagem": "https://image.freepik.com/vetores-gratis/feliz-dia-dos-namorados-coracao-brilhante-fundo-com-espaco-de-texto_1017-23191.jpg"
        },
        {
            "id": 2,
            "titulo": "Dia dos Namorados",
            "imagem": "../../img/Section1.png"
        },
        {
            "id": 3,
            "titulo": "Dia dos Namorados",
            "imagem": "../../img/Section1.png"
        }
    ];



    return (
    <div className="container">
        <Nav routeName={routeName}></Nav>

        <div className="section1" >
            <div>
                <h1>
                    Você precisa de
                </h1>
                <h1>
                    um presente?
                </h1>
                <h2>
                    Mas não sabe o que escolher?
                </h2>
                <h2>
                    Nós podemos te ajudar!
                </h2>


                <div className="button"><Link to="/">Encontrar</Link></div>
            </div>
            <img src={BackgroundImageSection1} alt="backgroundImage"/>
        </div>
        <div className="section2">
            <div className="divH1">
                <h1>
                    Melhores Presentes
                </h1>
                <Divider component="hr" variant="inset" />
            </div>
            <div className="items">
                {posts.map((post) =>
                    <div key={post.id}>
                        <h3>{post.titulo}</h3>
                        <div className="item">
                            <h3>Ver Mais</h3>
                            <img src={post.imagem} alt={post.titulo} />
                        </div>
                    </div>
                )}
            </div>
        </div>
        <img src="../../img/Section1.png" alt="backgroundImage"/>
    </div>
    );
}


if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
