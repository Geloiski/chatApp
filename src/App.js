import "./App.css";
import { BrowserRouter, Routes, Route }
	from "react-router-dom";
import SignIn from "../src/screens/SignIn";
import SignUp from "../src/screens/SignUp";
import ChatHome from "../src/screens/ChatHome";

function App() {
return (
	<div className="App">
	<BrowserRouter>
		<Routes>
		<Route exact path="/"
			element={<SignIn />} />
		<Route path="/Signup"
			element={<SignUp />} />
		<Route path="/chat-home/:recieverId"
			element={<ChatHome />} />
		</Routes>
	</BrowserRouter>
	</div>
);
}

export default App;
