import './assets/scss/main.scss'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PostPage from './pages/PostPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Navigation from './components/Navigation'

function App() {
	return (
		<div id='App'>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignupPage />} />
				<Route path='/:postId' element={<PostPage />} />
				{/* <Route path='*' element={<NotFound />} /> */}
			</Routes>
		</div>
	)
}

export default App
