// import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo'
import List from './components/List'
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      
      <ToDo/>
      <List/>

      <PersonCard lastName = {"Valladares"} firstName = { "Pedro"} age = {28} hColor = "Black"/>
      
      <PersonCard lastName = {"Valladares"} firstName = { "Jhon"} age = {58} hColor = "Black and White"/>
      
      <PersonCard lastName = {"Romero"} firstName = { "Mariana"} age = {57} hColor = "Black and White"/>
      
      <PersonCard lastName = {"Mader"} firstName = { "Mateo"} age = {19} hColor = "Browngit stat"/>
      

    

      
    </div>
  );
}

export default App;
