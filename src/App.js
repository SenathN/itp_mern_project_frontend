import { Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import Layout from './component/Layout';
import Public from './component/Public';
import DashLayout from './component/DashLayout';
import Welcome from './features/auth/Welcome';
import SpaceList from './features/spaces/SpaceList';
import SignUp from './features/auth/SignUp';
import SpaceProviderList from './features/space_providers/SpaceProviderList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Public />} />

        <Route path='sign-up' element={<SignUp />} />
        <Route path='login' element={<Login />} />

        <Route path='dash' element={<DashLayout />}>

          <Route index element={<Welcome />} />
          <Route path='spaces' >
            <Route index element={<SpaceList />} />
          </Route>
          <Route path='space-providers' >
            <Route index element={<SpaceProviderList />} />
          </Route>

        </Route>
      </Route>
    </Routes>
  );
}

export default App;

/*

        */