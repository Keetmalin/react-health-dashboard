# react-health-dashboard

> A live health dashboard component for React, with customizing capabilities. This provides a view to display the overall health of a component along with its sub components. This can also be used to display the health at separate timestamps, which will be display the local timestamp upon a hover over the health bubble of the relevant component.

[![NPM](https://img.shields.io/npm/v/react-health-dashboard.svg)](https://www.npmjs.com/package/react-health-dashboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save react-health-dashboard
```

## Usage

```jsx
import React, { Component } from 'react'

import HealthDashboard from 'react-health-dashboard'
import 'react-health-dashboard/dist/index.css'

const healthData = 

class Example extends Component {
  render() {
    return <HealthDashboard 
      data={healthData} 
    />
  }
}
```

## License

MIT © [keetmalin](https://github.com/keetmalin)
