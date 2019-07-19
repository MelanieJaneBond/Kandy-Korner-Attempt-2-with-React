import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Master from './components/KandyKornerMain'

import './index.css'

ReactDOM.render(
    <Router>
        <Master />
    </Router>
    , document.getElementById('root'))