import './App.css'
import UserRole from './components/UserRole/UserRole'
function App() {
 

  return (
    <div className='App'>
      <UserRole role ="admin"/>
      <UserRole role ="editor"/>
      <UserRole role ="viewer"/>
      <UserRole role ="BookCase"/>
    </div>
  )
}

export default App
