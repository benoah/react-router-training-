import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            
            <Switch>
                <Route path="/" render={() => <h1>Home Page!</h1>} />
                <Route path="/" render={() => <h1>Home Page!</h1>} />
            </Switch>
        </div>
    )
}

export default App