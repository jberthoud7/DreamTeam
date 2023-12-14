import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Start from './pages/Start'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import MyRankings from './pages/MyRankings'
import WorldRankings from './pages/WorldRankings'
import Rank from './pages/Rank'
import Account from './pages/Account'

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/myRankings' element={<MyRankings />} />
            <Route path='/worldRankings' element={<WorldRankings />} />
            <Route path='/rank' element={<Rank />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        </div>
      </Router>
    </>
    

  );
}

export default App;
