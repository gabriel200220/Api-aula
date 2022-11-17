import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '../pages/index/Index'

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Index />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
