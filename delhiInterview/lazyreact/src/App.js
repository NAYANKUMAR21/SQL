import ImagesExport from './Images';

import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./Home.jsx'));
function App() {
  return (
    <div>
      <Suspense fallback={<div>Please Wait...</div>}>
        <Home />
      </Suspense>
      <ImagesExport />
    </div>
  );
}

export default App;
