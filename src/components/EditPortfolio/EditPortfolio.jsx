import React, { useState } from 'react';
// material-ui
import { Button, TextField, IconButton, Typography, Dialog, DialogActions, DialogContent, DialogTitle, List, ListSubheader, ListItem, ListItemSecondaryAction, ListItemText, } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
// css
import './EditPortfolio.css';
const EditPortfolio = ({ isOpen, onClose, onDelete, onSelect, selectedPortfolio, portfoliosList, }) => {
  const [filter, setFilter] = useState(null);
  const handleDelete = (name) => onDelete(name);
  const handleSelect = (name) => onSelect(name);
  const handleClose = () => {
    onClose();
    setFilter(null); // reset state
  };
  const handleSubmit = () => {
    handleSelect();
    handleClose();
  };
  const renderPortoliosList = () => {
    const filteredList = filter
      ? portfoliosList.filter(portfolio => portfolio.name.toLowerCase().includes(filter))
      : portfoliosList;
    return filteredList.length ? (<React.Fragment>
      {filteredList.map(portfolio => (<ListItem button key={portfolio.name} onClick={() => handleSelect(portfolio.name)} className={`list-item ${portfolio.name === selectedPortfolio ? 'list-item--active' : ''}`}>
        <ListItemText primary={portfolio.name} className="edit-portfolio-item" />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" disabled={portfoliosList.length === 1} onClick={() => handleDelete(portfolio.name)}>
            <DeleteForever />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>))}
    </React.Fragment>) : (<Typography>No entries found containing: {filter}</Typography>);
  };
  return (<Dialog fullWidth className="edit-portfolio" aria-labelledby="EditPortfolio" open={isOpen} onClose={handleClose}>
    <DialogTitle id="EditPortfolio">Portfolios</DialogTitle>
    <DialogContent>
      <TextField required fullWidth margin="dense" placeholder="Search portfolio" onChange={(event) => setFilter(event.target.value ? event.target.value.toLowerCase() : null)} />
      <List className="list" subheader={<ListSubheader>Name</ListSubheader>}>
        {renderPortoliosList()}
      </List>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Close</Button>
    </DialogActions>
  </Dialog>);
};
export default EditPortfolio;
