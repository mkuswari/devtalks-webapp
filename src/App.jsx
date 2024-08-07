import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
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
import { asyncIsPreloadProcess } from "./states/isPreload/action";
import Loading from "./components/Loading";

const App = () => {
  const { isPreload = false } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncIsPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
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
      <Toaster />
    </>
  );
};

export default App;
