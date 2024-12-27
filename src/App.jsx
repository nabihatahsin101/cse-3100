//app jsx
import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import AboutUs from './views/AboutUs'; // Default export
import ContactUs from './views/ContactUs'; // Default export


function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path="/about" element={<AboutUs />} /> {/* Link AboutUs */}
        <Route path="/contact-us" element={<ContactUs />} /> {/* Link ContactUs */}
      </Route>
    </Routes>
  );
}

export default App;
