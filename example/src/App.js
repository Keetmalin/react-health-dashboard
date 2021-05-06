import React from 'react'

import { HealthDashboard } from 'react-health-dashboard'
import 'react-health-dashboard/dist/index.css'

import {healthData } from './sampleData/HealthData';

const App = () => {
  return <HealthDashboard data={healthData} />
}

export default App
