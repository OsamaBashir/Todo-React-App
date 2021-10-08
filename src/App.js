import './App.css';
import List from './components/List';
function TodoApp() {
 
  return (
   
    <div className="App">
      <header className="App-header">
        <div className= "wrapper" >
        <h4>My To-do List</h4>
         <List />
      </div>
      </header>
    </div>
  );
}

export default TodoApp;
