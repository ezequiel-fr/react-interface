import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { setLanguage } from './controllers/lang';

import ErrorHandler from './errors';
import Home from './interface/pages/Home';
import Test from './interface/pages/Test';

import './interface/assets/css/App.css';

const App = () => {
	setLanguage();

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="*" element={<ErrorHandler />} />

				<Route path="/home" element={<Home />} />
				<Route path="/test" element={<Test />} />

				<Route path="/error/:id" element={<ErrorHandler />} />
				<Route path="/error/:id/:desc" element={<ErrorHandler />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
