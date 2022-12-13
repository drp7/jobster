import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Landing, Error, Register, ProtectedRoute } from "./pages";
import {
  SharedLayout,
  AddJob,
  AllJobs,
  Profile,
  Stats,
} from "./pages/dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route
          path="landing"
          element={
            <React.Suspense fallback={<Loading />}>
              <Landing />
            </React.Suspense>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
