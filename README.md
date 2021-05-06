# react-health-dashboard

> A live health dashboard component for React, with customizing capabilities. This provides a view to display the overall health of a component along with its sub components. This can also be used to display the health at separate timestamps, which will be display the local timestamp upon a hover over the health bubble of the relevant component.

[![NPM](https://img.shields.io/npm/v/react-health-dashboard.svg)](https://www.npmjs.com/package/react-health-dashboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save react-health-dashboard
```

## Live Demonstration

For live demos of this component, please visit the below link.

http://keetmalin.github.io/react-health-dashboard

## What is this Component

![React Health Dashboard sample usage image](https://github.com/keetmalin/react-health-dashboard/blob/master/readme_images/react-health-dashboard-sample.png?raw=true "React Health Dashboard sample usage image")

This is a component that can be easily used as a Health Dashboard for your React Applicaiton. This includes a component health over time as well as it sub-component health over time. The below image represents the dashboard expanded to show the sub-components of a main component.

![React Health Dashboard expanded view](https://github.com/keetmalin/react-health-dashboard/blob/master/readme_images/react-health-dashboard-expanded-view.png?raw=true "React Health Dashboard expanded view")

The data represented in this dashboard can be simply changed by a JSON text. A sample text is given in the below example.

## Usage

```jsx
import React, { Component } from 'react'

import HealthDashboard from 'react-health-dashboard'
import 'react-health-dashboard/dist/index.css'

const healthData = [
  {
      name: 'Google Cloud',
      status: 1.0,
      lastCheckTime: 1611990000000,
      datapoints: [
        { timestamp: '1611964800000', value: 1.0 },
        { timestamp: '1611968400000', value: 1.0 },
        { timestamp: '1611972000000', value: 1.0 },
        { timestamp: '1611975600000', value: 1.0 },
        { timestamp: '1611979200000', value: 0.99 },
        { timestamp: '1611982800000', value: 1.0 },
        { timestamp: '1611986400000', value: 1.0 },
        { timestamp: '1611990000000', value: 1.0 }
      ],
      elements: [
        {
          name: 'Cloud Storage',
          status: 1.0,
          lastCheckTime: 1611990000000,
          elements: [],
          datapoints: [
            { timestamp: '1611964800000', value: 1.0 },
            { timestamp: '1611968400000', value: 1.0 },
            { timestamp: '1611972000000', value: 1.0 },
            { timestamp: '1611975600000', value: 1.0 },
            { timestamp: '1611979200000', value: 1.0 },
            { timestamp: '1611982800000', value: 1.0 },
            { timestamp: '1611986400000', value: 1.0 },
            { timestamp: '1611990000000', value: 1.0 }
          ]
        }
      ]
    }
]

class Example extends Component {
  render() {
    return <HealthDashboard 
      data={healthData} 
    />
  }
}
```

## Supported Props

The most important prop is the `data` prop. The `data` prop can be in the following format. This has been explained in detail using comments in the below JSON.

```jsx
data = [
  {
      name: 'Google Cloud', // name of the main component
      status: 1.0, // health of the main component (this is the leftmost bubble before the component name). Max = 1 (Green) and Min = 0 (Red). Any value between 1 and 0 will be Yellow. Any value outside of the range 0-1, will be Grey.
      lastCheckTime: 1611990000000, // Optional. The timestamp of the latest health check
      datapoints: [ // These datapoints represent the health of the main component over time.
        { timestamp: '1611964800000', value: 1.0 }, // timestamp is the timestamp of the healthcheck. value is the health of the main component. Max = 1 (Green) and Min = 0 (Red). Any value between 1 and 0 will be Yellow. Any value outside of the range 0-1, will be Grey.
        { timestamp: '1611968400000', value: 1.0 },
        { timestamp: '1611972000000', value: 1.0 },
        { timestamp: '1611975600000', value: 1.0 },
        { timestamp: '1611979200000', value: 0.99 },
        { timestamp: '1611982800000', value: 1.0 },
        { timestamp: '1611986400000', value: 1.0 },
        { timestamp: '1611990000000', value: 1.0 }
      ],
      elements: [ // These are the sub components and their health
        {
          name: 'Cloud Storage', // name of the sub component
          status: 1.0, // health of the sub component (this is the leftmost bubble before the sub component name). Max = 1 (Green) and Min = 0 (Red). Any value between 1 and 0 will be Yellow. Any value outside of the range 0-1, will be Grey.
          lastCheckTime: 1611990000000, // Optional. The timestamp of the latest health check
          datapoints: [
            { timestamp: '1611964800000', value: 1.0 }, // timestamp is the timestamp of the healthcheck. value is the health of the sub-component. Max = 1 (Green) and Min = 0 (Red). Any value between 1 and 0 will be Yellow. Any value outside of the range 0-1, will be Grey.
            { timestamp: '1611968400000', value: 1.0 },
            { timestamp: '1611972000000', value: 1.0 },
            { timestamp: '1611975600000', value: 1.0 },
            { timestamp: '1611979200000', value: 1.0 },
            { timestamp: '1611982800000', value: 1.0 },
            { timestamp: '1611986400000', value: 1.0 },
            { timestamp: '1611990000000', value: 1.0 }
          ]
        }
      ]
    }
]

```

More props will be coming soon with more flexibility. If you want a feature or a prop added immediately, please create an issue in the Github Repo: https://github.com/Keetmalin/react-health-dashboard/issues


## License

All contributions are welcome.

MIT © [keetmalin](https://github.com/keetmalin)
