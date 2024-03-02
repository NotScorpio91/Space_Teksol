import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    Home,
    PageNotFound,
  
} from './index'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="*" exact element={<PageNotFound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App