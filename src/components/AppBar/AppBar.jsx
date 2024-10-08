import * as React from 'react';
// material-ui
import { Tabs, Tab, IconButton, Typography } from '@mui/material';
import { Settings as SettingsIcon, Menu as MenuIcon, Add as AddIcon, } from '@mui/icons-material';
// components
import { default as Row } from '../../components/Row/Row';
import { default as Column } from '../../components/Column/Column';
// css
import './AppBar.css';
const AppBar = ({ isCollapsed = false, onAddPortfolio, onEditPortfolios, onChangeTab, onOpenSettings, selectedPortfolio, portfoliosList, }) => {
  // Event Handlers
  const handleOpenAddDialog = () => onAddPortfolio();
  const handleOpenEditDialog = () => onEditPortfolios();
  const handleOpenSettings = () => onOpenSettings();
  const handleChangeTab = (event, value) => onChangeTab(value);
  const renderButton = actions => (<React.Fragment>
    {actions.map(action => (<IconButton className="icon-button" color="inherit" key={action.key} aria-label={action.label} onClick={action.handler}>
      {action.icon}
    </IconButton>))}
  </React.Fragment>);
  const mainActions = [
    { key: 'add', label: 'Add a portfolio', handler: handleOpenAddDialog, icon: <AddIcon /> },
    { key: 'edit', label: 'Edit portfolios', handler: handleOpenEditDialog, icon: <MenuIcon /> },
  ];
  const additionalActions = [
    { key: 'settings', label: 'Settings', handler: handleOpenSettings, icon: <SettingsIcon /> },
  ];
  return (<div className={`app-bar ${isCollapsed ? 'app-bar_collapsed' : ''}`}>
    <Row>
      <Column shrink>
        <Typography className="title" variant="h6" color="inherit">
          Portfolio & Watchlist
        </Typography>
        {renderButton(mainActions)}
      </Column>
      <Column>
        <Tabs variant="scrollable" className="tabs" scrollButtons="auto" indicatorColor="primary" textColor="inherit" classes={{ indicator: 'tabs-indicator' }} onChange={handleChangeTab} value={selectedPortfolio}>
          {portfoliosList.map(portfolio => (<Tab classes={{ root: 'tab' }} key={portfolio.name} label={portfolio.name} value={portfolio.name} />))}
        </Tabs>
      </Column>
      <Column shrink horizontalAlignment="right">
        {renderButton(additionalActions)}
      </Column>
    </Row>
  </div>);
};
export default AppBar;
