import React from 'react';

import { ButtonGroup } from 'react-button-group-tis';
import 'react-button-group-tis/dist/index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='Title'>
        ButtonGroup Tis
      </div>
      <ButtonGroup
        className='ButtonGroup'
        items={['Windows', 'Linux']}
        onItemClick={(index, item) => console.log(`"${item}" selected!`)}
        darkMode={false}
      />
    </div>
  );
};

export default App;
