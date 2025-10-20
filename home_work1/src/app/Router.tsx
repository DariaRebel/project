import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout'
import { TaskPage } from 'pages/tasks/ui/TaskPage';
import { HomePage } from 'pages/home/ui/HomePage';
import { PrevIntupPage } from 'pages/Example2/ui/Example2';
import { ClickTimerPage } from 'pages/Example1/ui/Example';
import { FocusTrackerPage } from 'pages/Example3/ui/Example3';
import { DebouncedLoggerPage } from 'pages/Example4/ui/Example4';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='home' element={<HomePage />} />
          <Route path='previnput' element={<PrevIntupPage />} />
          <Route path='clicktimer' element={<ClickTimerPage />} />
          <Route path='focustracker' element={<FocusTrackerPage />} />
          <Route path='123' element={<DebouncedLoggerPage />} />
          <Route index element={<TaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
