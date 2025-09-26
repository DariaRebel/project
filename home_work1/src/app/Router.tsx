import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout'
import { TaskPage } from 'pages/tasks/ui/TaskPage';
import { HomePage } from 'pages/home/ui/HomePage';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='home' element={<HomePage />} />
          <Route index element={<TaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
