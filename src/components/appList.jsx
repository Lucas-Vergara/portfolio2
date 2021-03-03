import React from 'react';
import AppBlock from './appBlock'
import ReverseAppBlock from './reverseAppBlock'
import apps from './apps'

const AppList = () => {

  let list = [];

  for (let i = 0; i < apps.length; i++) {
    if ( ( i % 2 ) === 0) {
      list.push(<AppBlock src={apps[i].src} name={apps[i].name} url={apps[i].url} textEs1={apps[i].textEs1} textEs2={apps[i].textEs2} textEn={apps[i].textEn} key={apps[i].name} tags={apps[i].tags} github={apps[i].github} />)
    } else {
      list.push(<ReverseAppBlock src={apps[i].src} name={apps[i].name} url={apps[i].url} textEs1={apps[i].textEs1} textEs2={apps[i].textEs2} textEn={apps[i].textEn} key={apps[i].name} tags={apps[i].tags} github={apps[i].github} />)
    }
  };

  return(
    <div>
      {list}
    </div>
  )

}

export default AppList;