import * as React from 'react';
// material-ui
import { Tabs, Tab, IconButton } from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
// components
import { default as Row } from '../../components/Row/Row';
import { default as Column } from '../../components/Column/Column';
import { default as AssetsTypes } from '../../constants/AssetsTypes';
// css
import './TopBar.css';
const TopBar = ({ filter, onChangeFilterText, onChangeTab, selectedTab, }) => {
  const handleChangeFilterText = str => onChangeFilterText(str);
  const handleChangeTab = (event, value) => onChangeTab(value);
  const renderTabs = () => {
    const tabs = [
      { label: 'Overview', value: AssetsTypes.OVERVIEW },
      { label: 'Technical', value: AssetsTypes.TECHNICAL },
      { label: 'Performance', value: AssetsTypes.PERFORMANCE },
    ];
    return (<Tabs className="tabs" textColor="inherit" classes={{ indicator: 'tabs-indicator' }} value={selectedTab} onChange={handleChangeTab}>
      {tabs.map(tab => (<Tab classes={{ root: 'tab' }} key={tab.value} label={tab.label} value={tab.value} />))}
    </Tabs>);
  };
  const renderFilterBox = () => {
    return (<div className="filter">
      <div className="filter__search-icon">
        <SearchIcon />
      </div>
      <input className="filter__input" placeholder="Type a symbol name to filter" value={filter} onChange={event => handleChangeFilterText(event.target.value.toLowerCase())} />
      {Boolean(filter) && (<IconButton className="filter__clear-icon" onClick={() => handleChangeFilterText('')}>
        <CloseIcon />
      </IconButton>)}
    </div>);
  };
  return (<div className="topbar">
    <Row verticalAlignment="stretch">
      <Column verticalAlignment="stretch">{renderTabs()}</Column>
      <Column shrink>{renderFilterBox()}</Column>
    </Row>
  </div>);
};
export default TopBar;
