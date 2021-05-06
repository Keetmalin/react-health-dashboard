import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { HealthDashboard } from 'react-health-dashboard'
import 'react-health-dashboard/dist/index.css'

import {healthData } from './sampleData/HealthData';

const App = () => {
  return <React.Fragment>
          <HealthDashboard data={healthData} />
          <br />
          <h3>Given below is the JSON that is used as the prop `data` for the above displayed compoenent.</h3>
          <SyntaxHighlighter language='javascript' style={docco}>
            {`export const healthData = [
    {
      name: 'Google Cloud',
      status: 1.0,
      lastCheckTime: 1611990000000,
      datapoints: [
        { timestamp: '1611964800000', value: 1.0 },
        { timestamp: '1611968400000', value: 1.0 },
        { timestamp: '1611972000000', value: 1.0 },
        { timestamp: '1611975600000', value: 1.0 },
        { timestamp: '1611979200000', value: 0.9996438888888889 },
        { timestamp: '1611982800000', value: 1.0 },
        { timestamp: '1611986400000', value: 1.0 },
        { timestamp: '1611990000000', value: 1.0 }
      ],
      elements: [
        {
          name: 'Cloud Storage',
          status: 1.0,
          lastCheckTime: 1611990000000,
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
    },
    {
      name: 'AWS',
      status: null,
      lastCheckTime: 0,
      datapoints: [
        { timestamp: '1611964800000', value: 1.0 },
        { timestamp: '1611968400000', value: 1.0 },
        { timestamp: '1611972000000', value: 1.0 },
        { timestamp: '1611975600000', value: 1.0 },
        { timestamp: '1611979200000', value: 0.0 },
        { timestamp: '1611982800000', value: 1.0 },
        { timestamp: '1611986400000', value: 1.0 },
        { timestamp: '1611990000000', value: 1.0 }
      ],
      elements: [
        {
          name: 'File Storage',
          status: null,
          lastCheckTime: 0,
          datapoints: [
            { timestamp: '1611964800000', value: 1.0 },
            { timestamp: '1611968400000', value: 1.0 },
            { timestamp: '1611972000000', value: 1.0 },
            { timestamp: '1611975600000', value: 1.0 },
            { timestamp: '1611979200000', value: 0.0 },
            { timestamp: '1611982800000', value: 1.0 },
            { timestamp: '1611986400000', value: 1.0 },
            { timestamp: '1611990000000', value: 1.0 }
          ]
        },
        {
          name: 'Cloud',
          status: null,
          lastCheckTime: 0,
          datapoints: []
        },
        {
          name: 'DNS',
          status: null,
          lastCheckTime: 0,
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
        },
        {
          name: 'Lambda',
          status: null,
          lastCheckTime: 0,
          datapoints: []
        }
      ]
    },
    {
      name: 'Microsoft Azure',
      status: 1.0,
      lastCheckTime: 1611990000000,
      datapoints: [
        { timestamp: '1611964800000', value: 1.0 },
        { timestamp: '1611968400000', value: 1.0 },
        { timestamp: '1611972000000', value: 1.0 },
        { timestamp: '1611975600000', value: 1.0 },
        { timestamp: '1611979200000', value: 1.0 },
        { timestamp: '1611982800000', value: 1.0 },
        { timestamp: '1611986400000', value: 1.0 },
        { timestamp: '1611990000000', value: 1.0 }
      ],
      elements: [
        {
          name: 'Azure Blob Storage',
          status: 1.0,
          lastCheckTime: 1611990000000,
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
  ]`}
          </SyntaxHighlighter>
    </React.Fragment>
}

export default App
