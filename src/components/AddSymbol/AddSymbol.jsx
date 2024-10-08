import React, { useState } from 'react';
// material-ui
import { Button, Input, InputLabel, MenuItem, FormControl, Select, Chip, Dialog, DialogActions, DialogContent, DialogTitle, } from '@mui/material';
// css
import './AddSymbol.css';
const AddSymbol = ({ onClose, onSubmit, symbols, portfolio }) => {
  const [selectedSymbols, setSelectedSymbols] = useState(portfolio.symbols);
  const handleClose = () => onClose();
  const handleChange = (event) => setSelectedSymbols(event.target.value);
  const handleSubmit = () => {
    onClose();
    onSubmit({
      name: portfolio.name,
      data: Object.assign(Object.assign({}, portfolio), { symbols: selectedSymbols }),
    });
  };
  const renderSymbolsSelector = () => (<Select multiple value={selectedSymbols} classes={{ selectMenu: 'select-menu' }} input={<Input id="select-multiple-chip" />} onChange={handleChange} renderValue={(selected) => (<div>
    {selected.map(value => (<Chip className="chip" key={value} label={value} onDelete={() => setSelectedSymbols(symbols => symbols.filter(symbol => symbol !== value))} />))}
  </div>)}>
    {symbols.map(element => (<MenuItem key={element.symbol} value={element.symbol}>
      {element.symbol}
    </MenuItem>))}
  </Select>);
  return (<Dialog open fullWidth aria-labelledby="AddPortfolio" className="add-symbol" onClose={handleClose}>
    <DialogTitle id="AddPortfolio">Add Symbol</DialogTitle>
    <DialogContent>
      <FormControl className="form-control">
        <InputLabel htmlFor="select-multiple-chip">Find a Quote</InputLabel>
        {renderSymbolsSelector()}
      </FormControl>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleSubmit} color="primary">
        Update
      </Button>
    </DialogActions>
  </Dialog>);
};
export default AddSymbol;
