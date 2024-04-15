import Rotas from "./routes"
import { ToastContainer } from "react-toastify";
import "./App.css"
 
function App() {
  return (
    <div className="container">
      <Rotas />
      <ToastContainer autoClose={3000} />
    </div>
  )
}
export default App