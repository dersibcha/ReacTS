import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ParamsRouter from './components/ParamsRouter';
import StatePropsToChildren from './components/StatePropsToChildren';

const AppRoutes: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
            <Route path="statetochildren" element={<StatePropsToChildren />} />
            <Route path="params/:id" element={<ParamsRouter />} />
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;