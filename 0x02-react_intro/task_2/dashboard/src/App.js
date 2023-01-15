import react from 'react'
import reactDOM from 'react-dom'
import './App.css'
import Holberton_logo from './Holberton_logo.jpg'

class App extends react.Component {
    render() {
        return (
            <>
                <div className='App-header'>
                    <img src={Holberton_logo} alt='holberton_logo' />
                    <h1>School dashboard</h1>
                </div>
                <div className='App-body'>
                    <p>Login to access the full dashboard</p>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                    <button>OK</button>
                </div>
                <div className='App-footer'>
                    <p>Copyright 2020 - holberton School</p>
                </div>
            </>

        )
    }
}

reactDOM.render(<App />, document.getElementById('root'))
export default App;