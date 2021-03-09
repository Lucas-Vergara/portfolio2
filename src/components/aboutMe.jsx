import React from 'react'

const AboutMe = () => {

  // const birthday = new Date(1990,6,5);
  // const calculateAge = (birthday) => { 
  //   var ageDifMs = Date.now() - birthday.getTime();
  //   var ageDate = new Date(ageDifMs); 
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }

  // const age = calculateAge(birthday)

  return( 
    <div className='container about'>
      <div className='about-me'>
        <h1 className='title2'>Sobre Mi</h1>
        <p className='summary' sryle={{color: 'black'}}>
        Profesional interesado en optimizar tareas mediante la implementación de nuevas tecnologías y procesos.
        Interesado en la creación de grupos eficientes de trabajo. Preocupado de seguir las últimas tendencias en tecnología, herramientas y desarrollo de aplicaciones. Habitualmente buscando cursos para especializarse. He completado cursos dictados por google, y los curriculums de React, NodeJs y RoR en <a href="https://www.theodinproject.com" target='_blanck'>"The Odin Project"</a>
        </p>
        <p className='summary'> 
          Puedes revisar mi C.V. <a href="https://cvonline.me/@whlrgei4v9" target='_blanck'>aquí</a>.
        </p>
        <p className='summary'> Tecnologías que manejo: 
        <span className='tecs'>+ Html</span>
        <span className='tecs'>+ CSS, SASS</span>
        <span className='tecs'>+ JS, TS</span>
        <span className='tecs'>+ React</span>
        <span className='tecs'>+ NodeJs</span>
        <span className='tecs'>+ Ruby</span>
        <span className='tecs'>+ Ruby on Rails</span>
        <span className='tecs'>+ Pug</span>
        <span className='tecs'>+ jest</span>
        <span className='tecs'></span>
        <span className='tecs'></span>
        </p>

      </div>
    </div>
  )
}

export default AboutMe