import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Search from "./components/Search";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
	return (
		<Router>
			<div className="flex font-raleway flex-col h-full justify-between">
				<nav className="bg-gray-900 text-white p-4">
					<ul className="flex space-x-4 justify-center">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route
						path="/"
						element={<Search />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
