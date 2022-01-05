import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Article from "./components/Article";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Login from "./components/Login";
import MyPage from "./components/MyPage";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
