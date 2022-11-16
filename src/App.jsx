import './assets/scss/main.scss'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PostPage from './pages/PostPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CreatePostPage from './pages/CreatePostPage'
import Navigation from './components/Navigation'
import TrendingPage from './pages/TrendingPage'

function App() {
	return (
		<div id='App'>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Navigation /> <LandingPage />
						</>
					}
				/>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignupPage />} />
				<Route
					path='/create'
					element={
						<>
							<Navigation /> <CreatePostPage />
						</>
					}
				/>
				<Route
					path='/trending'
					element={
						<>
							<Navigation /> <TrendingPage />
						</>
					}
				/>
				<Route
					path='/:postId'
					element={
						<>
							<Navigation /> <PostPage />
						</>
					}
				/>
				{/* <Route path='*' element={<NotFound />} /> */}
			</Routes>
		</div>
	)
}

export default App
