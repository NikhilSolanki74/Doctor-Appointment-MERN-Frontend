import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux'; 
import Spinner from './components/Spinner'
import PublicRoute from './components/PublicRoute'
import ProtectedRoute from './components/ProtectedRoute'
import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from './components/NotificationPage';
import Users from './pages/admin/Users';
import Doctors from './pages/admin/Doctors';
function App() {
  const {loading} = useSelector(state=>state.alerts)
  return (
    <>
      <BrowserRouter>
      {loading ? <Spinner/>:
      <Routes>
          <Route path='/' element= {
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>  
          } />
          <Route path='/apply-doctor' element= {
          <ProtectedRoute>
            <ApplyDoctor/>
          </ProtectedRoute>   
          } />
          <Route path='/admin/users' element= {
          <ProtectedRoute>
            <Users/>
          </ProtectedRoute>   
          } />
          <Route path='/admin/Doctors' element= {
          <ProtectedRoute>
            <Doctors/>
          </ProtectedRoute>   
          } />
          <Route path='/notification' element= {
          <ProtectedRoute>
            <NotificationPage/>
          </ProtectedRoute>   
          } />
          <Route path='/login' element= {
         <PublicRoute>
          <Login/>
         </PublicRoute>

          } />
          <Route path='/register' element= {
        <PublicRoute>
           <Register/>
         </PublicRoute>
          } />
        </Routes>
      
      }
        
      </BrowserRouter>
    </>
  );
}

export default App;
