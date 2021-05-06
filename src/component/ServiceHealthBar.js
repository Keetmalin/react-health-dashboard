import React from 'react'
import {
  TableCell,
  TableRow,
  ListItemText,
  Collapse,
  ListItemIcon,
  List,
  ListItem
} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StatusIcon from './StatusIcon'

const ServiceHealthBar = ({
  getHealthServiceData,
  dependentServices,
  cluster
}) => {
  const [open, setOpen] = React.useState(false, true)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <TableRow style={{ verticalAlign: 'top' }}>
      <TableCell align='left' style={{ width: '1%' }}>
        <StatusIcon
          status={cluster.status}
          title={
            cluster.lastCheckTime
              ? new Date(cluster.lastCheckTime).toString()
              : ''
          }
          style={{ margin: '8px 0px' }}
        />
      </TableCell>
      <TableCell component='th' scope='row' style={{ width: '100%' }}>
        <ListItem button onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText
            primary={cluster.name}
            size='small'
            dense='true'
            style={{
              width: '200px',
              margin: '0.1em'
            }}
          />
          <div>
            {cluster.datapoints &&
              cluster.datapoints.map((item) => {
                return (
                  <StatusIcon
                    key={item.timestamp}
                    status={item.value}
                    title={new Date(parseInt(item.timestamp)).toString()}
                  />
                )
              })}
          </div>
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {dependentServices.map((service) => {
              return (
                <ListItem
                  key={service.name}
                  button
                  onClick={() => getHealthServiceData(service.name)}
                >
                  <ListItemIcon>
                    <StatusIcon
                      status={service.status}
                      title={
                        cluster.lastCheckTime
                          ? new Date(cluster.lastCheckTime).toString()
                          : ''
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={service.name}
                    size='small'
                    dense='true'
                    style={{
                      width: '200px',
                      margin: '0.1em'
                    }}
                  />
                  <div>
                    {service.datapoints.map((item) => {
                      return (
                        <StatusIcon
                          key={item.timestamp}
                          status={item.value}
                          title={new Date(parseInt(item.timestamp)).toString()}
                          style={{
                            width: '0.8em',
                            margin: '0.1em'
                          }}
                        />
                      )
                    })}
                  </div>
                </ListItem>
              )
            })}
          </List>
        </Collapse>
      </TableCell>
      <TableCell align='left'>
        {cluster.status === 1 ? 'Healthy' : 'Unhealthy'}
      </TableCell>
    </TableRow>
  )
}

function mapStateToProps() {
  return {}
}

export default ServiceHealthBar
