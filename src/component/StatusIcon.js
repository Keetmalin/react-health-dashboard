import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { Tooltip } from '@material-ui/core'
// import { SUCCESS_COLOR, FAILURE_COLOR, UNAVAILABLE_COLOR } from '../../../constants';

const StatusIcon = ({ status, title, style }) => {
  let statusIconColor
  if (status === 1) {
    statusIconColor = '#258933'
  } else if (status === 0) {
    statusIconColor = '#ff0000'
  } else if (status > 0 && status < 1) {
    statusIconColor = '#ebc034'
  } else {
    statusIconColor = '#918f89'
  }
  return (
    <Tooltip title={title}>
      <FiberManualRecordIcon style={{ color: statusIconColor, ...style }} />
    </Tooltip>
  )
}

export default StatusIcon
