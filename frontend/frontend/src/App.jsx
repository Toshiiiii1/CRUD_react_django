import { useState } from "react";
import Navigation from "./components/Navigation.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Students from "./components/Students";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

	return (
		<>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route exact path="/" element={<Home />} />
                    <Route path="/students" element={<Students/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
