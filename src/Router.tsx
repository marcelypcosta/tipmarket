import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./App";
import Destaques from "@/pages/Destaques";
import AoVivo from "@/pages/AoVivo";
import Lancamentos from "@/pages/Lancamentos";
import Menu from "@/pages/Menu";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <div className="px-5 pt-14 pb-4">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Sidebar />
    </div>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/destaques" element={<Destaques />} />
          <Route path="/ao-vivo" element={<AoVivo />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}