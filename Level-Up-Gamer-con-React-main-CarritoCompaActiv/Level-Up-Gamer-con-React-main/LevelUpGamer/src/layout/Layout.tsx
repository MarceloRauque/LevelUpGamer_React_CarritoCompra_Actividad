// src/layout/Layout.tsx

import { Outlet } from "react-router-dom";

import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <>
      {}
      <main style={{ minHeight: "86vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};