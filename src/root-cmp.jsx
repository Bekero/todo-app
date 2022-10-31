
import { Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import { AppHeader } from './cmps/app-header'
import { TodoApp } from './views/todo-app';
import { TasksForProject } from './views/tasks-for-project';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className="main-layout">
        {/* <TodoApp /> */}
        <Routes>

          <Route path='/tasks' element={<TasksForProject />} />
          <Route path='' element={<TodoApp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
