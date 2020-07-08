import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import './styles.css';
import Nav from '../../components/NavBar';
import Divider from '@material-ui/core/Divider';
import BackgroundImageSection1 from '../../img/Section1.png';
import BackgroundImageSection3 from '../../img/1.jpeg';
import api from '../../api';

export default function Home({routeName}) {
    const [gifts, setGifts] = useState([]);
        
    const backGroundImageSection3 = {
        backgroundImage: 'url(' + BackgroundImageSection3 + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      };


        useEffect(() => {
            api.get('/api/',{
            }).then(response => {
                setGifts(response.data);
            })

        }, [])

    return (
    <div className="container">

        <Nav routeName={routeName}></Nav>

        <div className="section1" >
        <img src={BackgroundImageSection1} alt="backgroundImage"/>
            <div className="section1Div">
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
            
        </div>
        <div className="section2">
            <div className="divH1">
                <h1>
                    Melhores Presentes
                </h1>
                <Divider component="hr" variant="inset" />
            </div>
            <div className="items">
                {gifts.map((gift) =>
                    <div key={gift.id}>
                        <h3>{gift.titulo}</h3>
                        <div className="item">
                            <Link to="">Ver Mais</Link>
                            <img src={gift.imagem} alt={gift.titulo} />
                        </div>
                    </div>
                )}
            </div>
        </div>
        <div className="section3" style={backGroundImageSection3} >
                <div className="section3Text">
                        <p>
                            Se tu tens uma recomendação
                        </p>
                        <p>
                            <span>de presente nos envie</span>
                        </p>
                        <p>
                            ajude a nos tornarmos melhor
                        </p>
                        <Link className="buttonSection3" to="/">
                           Recomendar
                        </Link>
                </div>

        </div>
    </div>
    );
}


if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
