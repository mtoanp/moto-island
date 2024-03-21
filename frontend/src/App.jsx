import "./App.scss";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<NavBar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
