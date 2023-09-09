import React from "react";
import { createBrowserRouter, Outlet, } from "react-router-dom";
import { Navbar, Footer } from "./components";
import styles from "./style";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import {
  Home,
  Productos,
  InfoProducto,
  Login,
  MenuAdmin,
  ErrorPage,
} from "./pages";

const router = createBrowserRouter([
  {
    element: (
      <div className="w-full overflowX-hidden">
        <div className={`${styles.boxWidth} ${styles.flexCenter} `}>
          <Navbar />
        </div>
        <div className={`bg-secondary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <AnimatePresence>
              <Outlet />
            </AnimatePresence>
            <Footer />
          </div>
        </div>
      </div>
    ),
    errorElement: (
      <div>
        <Navbar />
        <ErrorPage />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <AnimatePresence>
            <Home />
          </AnimatePresence>
        ),
      },
      {
        path: "/Productos",
        element: (
          <AnimatePresence>
            <Productos />
          </AnimatePresence>
        ),
      },
      {
        path: "/InfoProducto/:id",
        element: (
          <AnimatePresence>
            <InfoProducto />
          </AnimatePresence>
        ),
      },
      {
        path: "/Login",
        element: (
          <AnimatePresence>
            <Login />
          </AnimatePresence>
        ),
      },
      {
        path: "/Admin/",
        element: (
          <AnimatePresence>
            <MenuAdmin />
          </AnimatePresence>
        ),
      },
    ],
  },
]);

export default router;
