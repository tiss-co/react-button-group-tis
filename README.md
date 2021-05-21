# react-button-group-tis

>

[![NPM](https://img.shields.io/npm/v/react-button-group-tis.svg)](https://www.npmjs.com/package/react-button-group-tis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![react-button-group-tis Banner](https://user-images.githubusercontent.com/76048512/119117638-ab52c880-ba3e-11eb-9bcd-1e4abc599b6a.gif)

## Install

```bash
npm i react-button-group-tis
```

or

```bash
yarn add react-button-group-tis
```

## Usage

```jsx
import React from 'react'

import { ButtonGroup } from 'react-button-group-tis'
import 'react-button-group-tis/dist/index.css'

const App = () => {
  return (
    <ButtonGroup
      className='ButtonGroup'
      items={['Windows', 'Linux']}
      onItemClick={(index, item) => console.log(`"${item}" selected!`)}
      darkMode={false}
    />
  )
}

export default App
```

## License

MIT © [boof-tech](https://github.com/boof-tech)
