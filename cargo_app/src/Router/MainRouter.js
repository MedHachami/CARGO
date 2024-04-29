import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/main";
import { Login } from "../pages/Auth/";
import Home from "../pages/Home";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
