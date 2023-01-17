import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/header';

const LazyLogin = React.lazy(() => import('./page/login-page/login-page'))
const LazyHome = React.lazy(() => import('./page/home-page/home-page'))
const LazyDetailInfo = React.lazy(() => import('./page/detail-information-page/detail-information-page'))

export function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<React.Suspense><LazyLogin /> </React.Suspense>} />
        <Route path='home' element={<React.Suspense><LazyHome /></React.Suspense>} />
        <Route path='detail-information/:id' element={<React.Suspense><LazyDetailInfo /></React.Suspense>} />
      </Routes>
    </>
  );
}
