import './license';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { setLicenseKey } from '@mescius/wijmo';
// polyfills
import 'whatwg-fetch';
import 'core-js';
// global CSS
import './index.css';
import '@mescius/wijmo.styles/wijmo.css';
import configureStore from './store/configureStore';
import App from './routes/App/App';
setLicenseKey('*.grapecity.co.jp|*.grapecity.co.kr|*.grapecity.com|*.grapecity.com.cn|*.grapecitydev.com|*.mescius.co.kr|*.mescius.com|*.mescius.io|*.mescius.jp|*.mescius.kr|*.mescius.us,845956964674272#B0WiriI9RXaDVGchJ7RiojIh94QiwiIycjM4cjN4YTO6UTO5QDOiojIklkIs4XXbpjInxmZiwiIyY7MzAjMiojIyVmdiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zdWF4R0JEdLBzKklVaEZUUvcFaJFFbkJnSnhGOZF5TiJkdxVWNLJ5cSlWZWhndR3kMqB7Qv5ETzQUUy44KjRUZwQDbxhEVm94QrBzKNpkc5MTcrhUSzcnarVDWCNUd7UGW0RjdpFUTFlDTsZDZxxmRwk4VKRUUyd7ZxoHZ7YEZSpHRLlmVPNWM6I7R4MkeJFFVXNFeHVjWvhkTFZnUallVPREcKVXS8kUTGJUTzpmTxklQZN4Z7UFWKpmVht4KI3EUExmRqJ6bkFzcBhWaUBXTvFVciVUdUlneYlXVBVFTEJGb5knc5dFWZR7KG9GOiNkY6JXV8EDWZFDbCpHTwoHO8MGNnRlZklkMvY6dCtEaD3EckZjNvQnU4U5bGhmePF7cDlHWGlkMUJURzUFVXN4Q4klMw2GeJtydxE4NIdlcBVnbnpVVENkSDdzQBVXTw2yauZEOVVlI0IyUiwiI6YkRCRTOERjI0ICSiwCM5ADN5MjM5ITM0IicfJye&Qf35VfikEMyIlI0IyQiwiIu3Waz9WZ4hXRgACdlVGaThXZsZEIv5mapdlI0IiTisHL3JSNJ9UUiojIDJCLi86bpNnblRHeFBCIyV6dllmV4J7bwVmUg2Wbql6ViojIOJyes4nILdDOIJiOiMkIsIibvl6cuVGd8VEIgc7bSlGdsVXTg2Wbql6ViojIOJyes4nI4YkNEJiOiMkIsIibvl6cuVGd8VEIgAVQM3EIg2Wbql6ViojIOJyes4nIzMEMCJiOiMkIsISZy36Qg2Wbql6ViojIOJyes4nIVhzNBJiOiMkIsIibvl6cuVGd8VEIgQnchh6QsFWaj9WYulmRg2Wbql6ViojIOJyebpjIkJHUiwiI6AzNzITMgcTMwEzMyAjMiojI4J7QiwiIzVnLzVXajNXZt9iKsI7auMXdpN6cl5mLqwCcq9yc5l6YzVWbuoCLvlmLzVXajNXZt9iKs46bj9yc5l6YzVWbuoCLytmLvNmLzVXajNXZt9iKs46bj9idlRWe4l6YlBXYydmLqwibj9SbvNmL9RXajVGchJ7ZuoCLt36YukHdpNWZwFmcn9iKsI7au26YukHdpNWZwFmcn9iKsAnau26YukHdpNWZwFmcn9iKioj2ziG');
const store = configureStore({});
const theme = createTheme({}); // https://material-ui.com/customization/theming/
setTimeout(() => {
  const container = document.getElementById('app');
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Router>
    </Provider>);
  }
}, 100);
