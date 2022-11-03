import './assets/scss/main.scss'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PostPage from './pages/PostPage'

function App() {
	return (
		<div id='App'>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/:postId' element={<PostPage />} />
				{/* <Route path='*' element={<NotFound />} /> */}
			</Routes>
		</div>
	)
}

export default App
