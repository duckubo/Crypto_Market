import React, { useState } from 'react';
// material-ui
import { FormGroup, FormControlLabel, Typography, Menu, Button, Checkbox, } from '@mui/material';
import { PlaylistAdd as PlayListIcon, Refresh as RefreshIcon, Print as PrintIcon, GetApp as DownloadIcon, VisibilityOff as HideIcon, } from '@mui/icons-material';
import { default as Row } from '../../components/Row/Row';
import { default as Column } from '../../components/Column/Column';
// css
import './ToolBar.css';
const ToolBar = ({ onAddSymbols, onHideField, onRefresh, onPrint, onDownload, columns, section, }) => {
  const [columnsVisibilityMenu, setColumnsVisibilityMenu] = useState(null);
  const handleAddSymbol = () => onAddSymbols();
  const handleRefresh = () => onRefresh();
  const handlePrint = () => onPrint();
  const handleDownload = () => onDownload();
  const handleChangeColumn = (event, binding) => onHideField(binding, event.target.checked);
  const renderCheckbox = option => (<Checkbox checked={option.visible} value={option.binding} onChange={event => handleChangeColumn(event, option.binding)} />);
  const column = columns[section];
  return (<div className="toolbar">
    <Row>
      <Column>
        <Typography className="caption" variant="caption">
          Symbols
        </Typography>
        <Button color="inherit" onClick={handleAddSymbol}>
          <PlayListIcon />
          <span className="button-label">Symbols</span>
        </Button>
        <div>
          <Button color="inherit" onClick={event => setColumnsVisibilityMenu(event.currentTarget)}>
            <HideIcon />
            <span className="button-label">Columns</span>
          </Button>
          <Menu anchorEl={columnsVisibilityMenu} open={Boolean(columnsVisibilityMenu)} onClose={() => setColumnsVisibilityMenu(null)}>
            <div className="g_menu-inner">
              {column.map(option => Boolean(option.binding) && (<FormGroup key={option.binding}>
                <FormControlLabel label={option.header} control={renderCheckbox(option)} />
              </FormGroup>))}
            </div>
          </Menu>
        </div>
      </Column>
      <Column shrink horizontalAlignment="right">
        <Button color="inherit" onClick={handleRefresh}>
          <RefreshIcon />
          <span className="button-label">Refresh</span>
        </Button>
        <Button color="inherit" onClick={handlePrint}>
          <PrintIcon />
          <span className="button-label">Print</span>
        </Button>
        <Button color="inherit" onClick={handleDownload}>
          <DownloadIcon />
          <span className="button-label">Download</span>
        </Button>
      </Column>
    </Row>
  </div>);
};
export default ToolBar;
