import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  DetailThreadPage,
  HomePage,
  LeaderboardPage,
  LoginPage,
  NewThreadPage,
  RegisterPage,
} from "./pages";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-thread" element={<NewThreadPage />} />
        <Route path="/thread/:id" element={<DetailThreadPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Route>
    </Routes>
  );
};

export default App;
