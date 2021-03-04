import React from 'react';
import AppList from './appList'


const Home = () => {



  return(
    <div id='home'>
      <div className='container'>
        <div className='introduction'>
          <div className='title' style={{color: "#308353ef"}}>
            <h2>
            Bienvenidos a mi Galería
            </h2>
            <div className='subtitle' >
              Acá podras visitar las diferentes aplicaciones que he construido, y revisar mi curriculum en la pestaña "Sobre Mí". Para visitar una página, solo clickea en su imagen.
            </div>
          </div>

        </div>
        <div>
          <AppList />                
        </div>
      </div>
    </div>

  )
}

export default Home