/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {
	AppBar, ToolBar, inputBase, Typography, Box,
} from '@mui/material';

import App from './App.js';

const root = createRoot(document.getElementById('root'));
root.render(
	<App />,
);