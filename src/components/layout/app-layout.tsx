import { Outlet } from "react-router-dom";

// Provides the shared layout shell for every routed page.
const AppLayout = () => (
  <div className="app-shell">
    <Outlet />
  </div>
);

export default AppLayout;

