import * as React from 'react';
// material-ui
import { FormGroup, FormControlLabel, FormLabel, MenuItem, Divider, Typography, IconButton, Switch, Select, } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
// components
import { default as Row } from '../Row/Row';
import { default as Column } from '../Column/Column';
// css
import './Settings.css';
const Settings = ({ isOpen = false, onClose, onUpdateSettings, settings }) => {
  const handleClose = () => onClose();
  const handleUpdateSettings = entry => onUpdateSettings(entry);
  const renderSwitch = params => {
    const { label, isChecked, key } = params;
    return (<FormGroup key={key} className="form-group">
      <FormControlLabel label={label} control={<Switch checked={isChecked} onChange={event => handleUpdateSettings({ [key]: event.target.checked })} />} />
    </FormGroup>);
  };
  const { isCustomCells, isAutoUpdate, isFreezeFirstRow, isFreezeFirstCol } = settings;
  const { updateInterval, rowHeight } = settings;
  const switches = [
    { key: 'isCustomCells', label: 'Custom Cells', isChecked: isCustomCells },
    { key: 'isFreezeFirstCol', label: 'Freeze First Column', isChecked: isFreezeFirstCol },
    { key: 'isFreezeFirstRow', label: 'Freeze First Row', isChecked: isFreezeFirstRow },
    { key: 'isAutoUpdate', label: 'Auto Update', isChecked: isAutoUpdate },
  ];
  return (<div className={`settings ${isOpen ? 'settings_open' : ''}`}>
    <div className="panel">
      <Row className="panel-head">
        <Column>
          <Typography variant="h6">Settings</Typography>
        </Column>
        <Column shrink horizontalAlignment="right">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Column>
      </Row>
      <Divider />
      {switches.map(element => renderSwitch(element))}
      <FormGroup className="form-group">
        <FormLabel>Update Interval (s):</FormLabel>
        <Select value={updateInterval} onChange={event => handleUpdateSettings({ updateInterval: event.target.value })} MenuProps={{
          classes: {
            paper: "interval-popover",
          }
        }}>
          <MenuItem value={3000}>3</MenuItem>
          <MenuItem value={5000}>5</MenuItem>
          <MenuItem value={10000}>10</MenuItem>
          <MenuItem value={20000}>20</MenuItem>
          <MenuItem value={30000}>30</MenuItem>
          <MenuItem value={60000}>60</MenuItem>
        </Select>
      </FormGroup>
      <FormGroup className="form-group">
        <FormLabel>Display density:</FormLabel>
        <Select value={rowHeight} onChange={event => handleUpdateSettings({ rowHeight: event.target.value })} MenuProps={{
          classes: {
            paper: "interval-popover",
          }
        }}>
          <MenuItem value={40}>Tiny</MenuItem>
          <MenuItem value={60}>Normal</MenuItem>
          <MenuItem value={80}>Wide</MenuItem>
        </Select>
      </FormGroup>
    </div>
  </div>);
};
export default Settings;
