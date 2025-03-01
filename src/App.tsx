import { TodoList } from './components/todo-list';

function App() {
  return (
    <div className='container'>
      <h1 data-testId='title'>React Testing Demo</h1>

      <div className='content'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
