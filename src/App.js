import { Suspense } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Loader from './pages/Loader';

// import HomePage from './pages/HomePages/index';
// import Page1 from './pages/HomePages/Page1';
// import Page2 from './pages/HomePages/Page2';
// import Page3 from './pages/HomePages/Page3';
// import Page4 from './pages/HomePages/Page4';
// import Page5 from './pages/HomePages/Page5';
// import Page6 from './pages/HomePages/Page6';
// import Page7 from './pages/HomePages/Page7';
// import Page8 from './pages/HomePages/Page8';
// import Page9 from './pages/HomePages/Page9';

// import Login from './pages/AdminPages/Login/index';

// import AdminPage from './pages/AdminPages/index';
// import Images from './pages/AdminPages/images/index';
// import Setting from './pages/AdminPages/setting/index';

import renderRoutes from './routers/index';
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
          {/* HomeTemplate */}
          {/* <Route path='' element={<HomePage />}>
            <Route index element={<Page1 />} />
            <Route path='page2' element={<Page2 />} />
            <Route path='page3' element={<Page3 />} />
            <Route path='page4' element={<Page4 />} />
            <Route path='page5' element={<Page5 />} />
            <Route path='page6' element={<Page6 />} />
            <Route path='page7' element={<Page7 />} />
            <Route path='page8' element={<Page8 />} />
            <Route path='page9' element={<Page9 />} />
          </Route>
          <Route path='auth' element={<Login />}></Route> */}
          {/* AdminTemplate */}
          {/* <Route path='admin' element={<AdminPage />}>
            <Route path='images' element={<Images />} />
            <Route path='setting' element={<Setting />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
