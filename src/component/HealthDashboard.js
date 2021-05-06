import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Grid,
    LinearProgress,
} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ServiceHealthBar from './ServiceHealthBar';

import ErrorDisplay from './ErrorDisplay';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 3,
        overflowX: 'auto',
    },
    grid: {},
    selectEnv: {
        padding: '12px',
    },
    table: {
        minWidth: 650,
    },
    loadingBox: {
        height: '65px',
    },
    loading: {
        margin: '20px auto',
        display: 'block',
    },
    filter: {
        width: '100px',
    },
}));

const ServiceTable = props => {
    let {
        changeHealthViewEnvironment,
        changeHealthViewDate,
        changeHealthViewGranularity,
        changeHealthViewSLOType,
        fetchHealthData,
        environments,
        granularities,
        sloTypes,
        filters,
        fetching,
        error,
        showFilters,
        data,
    } = props;

    console.log(data);

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            {showFilters && (
                <Grid className={classes.grid} container>
                    <Grid className={classes.selectEnv} item xs={6} md={3}>
                        <FormControl>
                            <InputLabel id="environment-selection">
                                Environment
                            </InputLabel>
                            <Select
                                id="environment-selection"
                                labelId="environment-selection"
                                onChange={event => {
                                    changeHealthViewEnvironment(
                                        event.target.value
                                    );
                                    fetchHealthData({
                                        ...filters,
                                        selectedEnvironment: {
                                            value: event.target.value,
                                        },
                                    });
                                }}
                                value={filters.selectedEnvironment.value}
                            >
                                {environments.map(env => (
                                    <MenuItem value={env.value} key={env.name}>
                                        {env.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid className={classes.selectEnv} item xs={6} md={3}>
                        <FormControl>
                            <InputLabel id="graularity-selection">
                                Granularity
                            </InputLabel>
                            <Select
                                id="graularity-selection"
                                labelId="graularity-selection"
                                onChange={event => {
                                    changeHealthViewGranularity(
                                        event.target.value
                                    );
                                    fetchHealthData({
                                        ...filters,
                                        selectedGranularity: event.target.value,
                                    });
                                }}
                                value={filters.selectedGranularity}
                            >
                                {granularities.map(granularity => (
                                    <MenuItem
                                        value={granularity}
                                        key={granularity}
                                    >
                                        {granularity}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid className={classes.selectEnv} item xs={6} md={3}>
                        <FormControl className={classes.filter}>
                            <InputLabel id="slo-type-selection">
                                SLO Type
                            </InputLabel>
                            <Select
                                id="slo-type-selection"
                                labelId="slo-type-selection"
                                onChange={event => {
                                    changeHealthViewSLOType(event.target.value);
                                    fetchHealthData({
                                        ...filters,
                                        selectedSloType: event.target.value,
                                    });
                                }}
                                value={filters.selectedSloType}
                            >
                                {sloTypes.map(slo => (
                                    <MenuItem value={slo} key={slo}>
                                        {slo}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                autoOk
                                disableToolbar
                                format="MM/dd/yyyy"
                                id="date-picker-inline"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                label="Select Date"
                                margin="normal"
                                onChange={event => {
                                    changeHealthViewDate(event);
                                    fetchHealthData({
                                        ...filters,
                                        selectedDate: event.valueOf(),
                                    });
                                }}
                                value={filters.selectedDate}
                                variant="inline"
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
            )}
            {fetching ? (
                <LinearProgress></LinearProgress>
            ) : error ? (
                <ErrorDisplay error={error}></ErrorDisplay>
            ) : (
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" />
                            <TableCell align="center">Component</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(item => {
                            return (
                                <ServiceHealthBar
                                    key={item.name}
                                    cluster={item}
                                    dependentServices={item.elements}
                                />
                            );
                        })}
                    </TableBody>
                </Table>
            )}
        </Paper>
    );
};

export default ServiceTable;
