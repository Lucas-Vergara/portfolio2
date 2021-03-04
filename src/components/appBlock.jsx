import React from 'react' 
import githubLogo from '../images/github.png'


const AppBlock = (props) => {

  const {url, textEs1, textEs2, name, src, tags, github} = props

  return (
    <div className='app-block'>
      <a href={url} target="_blank" rel='noreferrer' className='app-image'>
        <img src={src} alt={name} className='image' key={name + '2'}/>
      </a>
      <div className='app-text'>
        <h2 className='app-title'>{name}</h2>
        <div className="summary">
          {textEs1}
        </div>         
        <div className="summary">
          {textEs2}
        </div>
        <div className='tagline'>
          {tags.map((tag)=>(<img src={tag} alt={tag} key={tag} className='tags'></img>))}
        </div>
        <a href={github} target="_blank" rel='noreferrer' >
          <img src={githubLogo} alt="github"  className='github-logo' key={name}/>
        </a>
      </div>
    </div>
  )
}

export default AppBlock