import { Outlet } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContextProvider } from './shared/context/auth-context';

function App() {
  return (
    <AuthContextProvider>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </AuthContextProvider>
  );
}

export default App;
