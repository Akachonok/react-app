import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './page/login-page/login-page';
import { HomePage } from './page/home-page/home-page';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
}
