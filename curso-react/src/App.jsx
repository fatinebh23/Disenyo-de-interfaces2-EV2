
import "./App.css"
import Card from './components/Card';



function App() {
  return (
  <div className="App">

    <h1>Hola React</h1>
    <div className="container">
    <Card title="Titulo" 
    description="la descripcion"/>
    <Card title="Titulo" 
    description="la descripcion" />
    <Card />
    <Card />
    </div>
  </div>
  )
}

export default App;
