import yop from '../images/yop.jpg'
import winwin from '../images/winwin.jpg'
import simpleEcommerce from '../images/simple-ecommerce.png'
import memoryGame from '../images/memory-game.png'
import react from '../images/react.png'
import rails from '../images/rails.png'
import ocean from '../images/ocean.svg'
import nodejs from '../images/nodejs.png'
import pug from '../images/pug.svg'
import heroku from '../images/heroku.svg'
import cachipun from '../images/cachipun.png'
import sketch from '../images/sketch.png'
import tictactoe from '../images/tictactoe.png'
import restaurant from '../images/restaurant.png'

const apps = [
  {
    name: 'YOP',
    url: 'https://www.yourownparty.com/',
    textEs1: 'Aplicación web para organizar fiestas, creada con ruby on rails. Trabajo realizado como freelance para cliente.',
    textEs2: 'Se implementa sistema para que el administrador de la página pueda subir productos, manejar stock, organizar calendarios, etc. Además, sistema crear usuario, google maps, mailing, entre otros. Trabajo de back-end y mantenimiento de servidor en Digital Ocean',
    textEn: 'Web',
    src: yop,
    tags: [rails, ocean],
    github: 'https://github.com/Lucas-Vergara/yop',
  }, 
  {
    name: 'Win & Win',
    url: 'https://winandwin.cl/',
    textEs1: 'Aplicación web que ofrece servicios para detener alsas en planes de isapre, creada con ruby on rails. Trabajo realizado como freelance para cliente.',
    textEs2: 'Se implementa sistema para recivir datos y crear archivos en base a planillas ingresadas previamente por el administrador. Estos archivos pueden ser descargados por el administrador. Ademas, sistema de usuarios, mailing, entre otros. Trabajo de back-end y mantenimiento de servidor en Digital Ocean.',
    textEn: 'Web',
    src: winwin,
    tags: [rails, ocean],
    github: 'https://github.com/Lucas-Vergara/deivid',
  }, 
  {
    name: 'E-Commerce',
    url: 'https://lucas-vergara.github.io/simple-ecommerce',
    textEs1: 'Aplicación web tipo de E-Commerce simple. Creada para mostrar una verción primitiva de como funcionaría la página, para luego escalarla según necesidades del cliente.',
    textEs2: '',
    textEn: 'web',
    src: simpleEcommerce,
    tags: [react],
    github: 'https://github.com/Lucas-Vergara/simple-ecommerce'
  }, 
  {
    name: 'Local Library',
    url: 'https://guarded-retreat-30177.herokuapp.com/catalog',
    textEs1: 'Biblioteca local construida siguiendo el tutorial de mozilla. Funcionalidad REST aplicada para crear y mantener libros, autores, generes, etc.',
    textEs2: '',
    textEn: 'web',
    src: nodejs,
    tags: [nodejs, pug, heroku],
    github: 'https://github.com/Lucas-Vergara/local-library'
  },
  {
    name: 'Memory Card Game',
    url: 'https://lucas-vergara.github.io/memory-game/',
    textEs1: 'Juego de memoria, creado usando React. Parte del curriculum de React de "The Odin Project. El objetivo del juego es precionar las cartas de instrumentos en sucesión, sin repetirlas, hasta completarlas todas.',
    textEs2: 'Se utilizan states de React para mantener puntaje, y para barajar las cartas',
    textEn: 'web',
    src: memoryGame,
    tags: [react],
    github: 'https://github.com/Lucas-Vergara/memory-game'
  }, 
  {
    name: 'Simple Restaurant',
    url: 'https://lucas-vergara.github.io/restaurant/',
    textEs1: 'Ejemplo de restaurant simple, optimizado con webpack.',
    textEs2: '',
    textEn: '',
    src: restaurant,
    tags: [],
    github: 'https://github.com/Lucas-Vergara/restaurant'
  },
  {
    name: 'Sketch',
    url: 'https://lucas-vergara.github.io/Sketch/',
    textEs1: 'Juego de la pizarra mágica básico, creado con simple html, javascript y css',
    textEs2: '',
    textEn: '',
    src: sketch,
    tags: [],
    github: 'https://github.com/Lucas-Vergara/Sketch'
  },
  {
    name: 'Cachipún',
    url: 'https://lucas-vergara.github.io/cachipun/2.0/cachipun.html',
    textEs1: 'Juego cachipún básico, creado con simple html, javascript y css',
    textEs2: '',
    textEn: 'web',
    src: cachipun,
    tags: [],
    github: 'https://github.com/Lucas-Vergara/cachipun'
  },
  {
    name: 'Tic Tac Toe',
    url: 'https://lucas-vergara.github.io/tictactoe/',
    textEs1: 'Juego del "gato" básico, creado con simple html, javascript y css',
    textEs2: '',
    textEn: '',
    src: tictactoe,
    tags: [],
    github: 'https://github.com/Lucas-Vergara/tictactoe'
  }

]

export default apps