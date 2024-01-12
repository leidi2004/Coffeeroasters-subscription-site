import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { AboutUs } from "./pages/about/AboutUs";
import { CreatePlan } from "./pages/createplan/CreatePlan";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/about-us" element={<AboutUs/>} />
				<Route path="/create-plan" element={<CreatePlan/>} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
