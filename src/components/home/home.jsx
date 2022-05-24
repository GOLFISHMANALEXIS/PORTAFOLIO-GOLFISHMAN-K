import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>Scroll Abajo</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>Sobre mi:</span> <br />
        <p>
         Mi nombre es Alexis, soy desarrollador en proceso de aprendijaze
         de Tehuacán. Mi lenguaje de programación favorito es JavaScript, 
         con él he aprendido muchas cosas y desarrollo las herramientas 
         que me ofrece. Mi objetivo es usarlo para crear soluciones tecnológicas
         a la medida de cualquier necesidad.
         Estoy convencido de que el trabajo en equipo es la mejor forma de avanzar en cualquier trabajo o proyecto.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
