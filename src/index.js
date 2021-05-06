import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

import Component from './component/HealthDashboard';

export const HealthDashboard = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
}

export default HealthDashboard
