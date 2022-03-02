import React from 'react';
import './App.css';

// COMPONENTS
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';
import ResponsiveNavigation from './components/ResponsiveNavigation/ResponsiveNavigation';

//REACT ROUTER DOM

import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//VIEWS

import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import CelularDetail from './views/CelularDetail/CelularDetail';
import ModeloCelular from './views/ModeloCelular/ModeloCelular';


// FIRBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

const App = () => {
	

	return (
		<Router>
		<div className='App'>
			<Header />
			<ResponsiveNavigation></ResponsiveNavigation>
			<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/details/:id' element={<CelularDetail />} />
						<Route path='/modelo/:modelo' element={<ModeloCelular />} />


			</Routes>
		</div>
		</Router>
	);
};

export default App;
