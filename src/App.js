import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DocumentRead from "./components/documentRead";
import DocumentUpdate from "./components/documentUpdate";
import DocumentCreate from "./components/documentCreate";
import DocumentIndex from "./components/documentIndex";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<Router className='container'>
			<div className='container'>
				<Navbar />
				<Route path='/create' component={DocumentCreate} />
				<Route path='/list' component={DocumentRead} />
				<Route path='/' exact component={DocumentIndex} />
				<Route path='/update/:id' component={DocumentUpdate} />
				<Route path='/delete/:id' component={DocumentRead} />
			</div>
		</Router>
	);
}

export default App;
