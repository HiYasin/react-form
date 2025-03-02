import './App.css'
import ReusaForm from './components/ReusaForm'


const handleSignUp = formData => {
  // Sign Up Logic goes here
  console.log('Sign Up Data',formData);
}
const handleSignIn = formData => {
  // Sign In Logic goes here
  console.log('Sign In Data',formData);
}


function App() {
  return (
    <>
      <ReusaForm formTitle={"Sgin Up"} submit={"Sign Up"} handleSubmit={handleSignUp}></ReusaForm>
      <ReusaForm formTitle={"Sgin In"} submit={"Sign In"} handleSubmit={handleSignIn}></ReusaForm>
    </>
  )
}

export default App
