import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { CreatePlan } from "./pages/CreatePlan";


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
