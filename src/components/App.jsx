import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home"
import {Users} from './pages/Users'

export const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
<Route path="user" element={<Users/>}/>
    </Route>
   </Routes>
   </>
  );
};
