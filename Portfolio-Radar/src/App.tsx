import { Route, Routes, useLocation } from "react-router-dom";

import { Navbar, Footer } from "./components";
import {
  DefiEcosystem,
  Blog,
  BuyCrypto,
  Faq,
  AppDashboard,
  Home,
} from "./pages";

export default function App() {
  const location = useLocation();
  const isDashboard = location.pathname === "/app-dashboard";

  return (
    <div className="bg-primary-1 h-screen">
      {!isDashboard && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/defi-ecosystem" element={<DefiEcosystem />} />
        <Route path="/buy-crypto" element={<BuyCrypto />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/app-dashboard" element={<AppDashboard />} />
      </Routes>

      {!isDashboard && <Footer />}
    </div>
  );
}
