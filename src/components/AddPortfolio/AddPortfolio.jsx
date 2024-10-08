import React, { useState } from 'react';
// material-ui
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@mui/material';
// css
import './AddPortfolio.css';
const AddPortfolio = ({ onClose, onSubmit, isOpen, usedNames = [] }) => {
  const [name, setName] = useState('');
  const handleSubmit = () => {
    handleClose();
    onSubmit(name.trim());
    setName(''); // reset state
  };
  const handleClose = () => {
    onClose();
    setName(''); // reset state
  };
  const hasError = usedNames === null || usedNames === void 0 ? void 0 : usedNames.includes(name); // Check that the name is available
  return (<Dialog open={isOpen} aria-labelledby="AddPortfolio" onClose={handleClose}>
    <DialogTitle id="AddPortfolio">New Portfolio</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Create and track your portfolio or watchlist and maintain transaction history information.
      </DialogContentText>
      <TextField autoFocus required fullWidth margin="dense" label="Enter portfolio name" error={hasError} onChange={(event) => setName(event.target.value)} />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleSubmit} color="primary" disabled={hasError || name.trim().length === 0}>
        Create
      </Button>
    </DialogActions>
  </Dialog>);
};
export default AddPortfolio;
