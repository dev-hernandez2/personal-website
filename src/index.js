import React from 'react'
import ReactDOM from 'react-dom'

//import bulma css framework
import 'bulma/css/bulma.css'
import 'animate.css'
import 'hover.css/css/hover.css'
import './App.css'


import App from './Routers'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
