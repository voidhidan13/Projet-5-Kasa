import React from 'react';
import CollapseComponent from '../components/CollapseComponent';
import aboutList  from '../data/aboutlist.json';

const APropos = () => {
  return (
    <div className="page-apropos">
      <div className="banner-apropos">
      </div>
      <div className="collapse-container" >
        {aboutList.map(item => (
          <CollapseComponent
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default APropos