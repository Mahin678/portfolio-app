import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Best from './Component/Home/Experience/Best/Best';
import AllProject from './Component/AllProject/AllProject';
import ContactForm from './Component/ContactForm/ContactForm';
import UpComing from './Component/Home/Experience/UpComing/UpComing';
import UnderDevelopment from './Component/Home/Experience/UnderDevelopment/UnderDevelopment';
import MyBlog from './Component/MyBlog/MyBlog';
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/allProject">
						<AllProject />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/best">
						<Best />
					</Route>
					<Route path="/contact">
						<ContactForm />
					</Route>
					<Route path="/blog">
						<MyBlog />
					</Route>
					<Route path="/upcoming">
						<UpComing />
					</Route>
					<Route path="/underDevelopment">
						<UnderDevelopment />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
