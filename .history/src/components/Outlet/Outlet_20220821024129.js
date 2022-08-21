import { Outlet } from "react-router-dom";

const outlet = () => {
  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default outlet;
