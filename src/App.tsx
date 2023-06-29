import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";

const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './Pages/FullPizza.tsx'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './Pages/NotFound.tsx'));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './Pages/Cart.tsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Suspense fallback={<p>загрузка...</p>}>
          <Cart />
        </Suspense>} />
        <Route path="pizza/:id" element={<Suspense fallback={<p>загрузка...</p>}>
          <FullPizza />
        </Suspense>} />
        <Route path="*" element={<Suspense fallback={<p>загрузка...</p>}>
          <NotFound />
        </Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;
