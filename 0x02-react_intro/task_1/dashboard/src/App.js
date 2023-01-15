import react from 'react'
import reactDOM from 'react-dom'
import './App.css'
import Holberton_logo from './Holberton_logo.jpg'

class App extends react.Component {
    render() {
        return (
            <div className='App-body'>
                <header className='App-header'>
                    <img src={Holberton_logo} alt='holberton_logo' />
                    <h1>School dashboard</h1>
                </header>
                <p>Login to access the full dashboard</p>
                <footer className='App-footer'>
                    <p>Copyright 2020 - holberton School</p>
                </footer>
            </div>
        )
    }
}

reactDOM.render(<App />, document.getElementById('root'))
export default App;