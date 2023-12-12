import './App.css';
import { Header } from './Header';
import { Todos } from './Todos';
import { ButtomNav } from './ButtomNav';

function App() {
const todos = [
  'Jog around the park 3x',
  '10 minutes meditation',
  'Read for 1 hour',
  'Pick up groceries',
  'Complete Todo App from Frontend '
]


  return (
    <div className="App">
      <Header />
      <Todos todos={todos} />
      <ButtomNav />
    </div>
  );
}

export default App;
