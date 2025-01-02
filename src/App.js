import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./page/BlogPage";
import PostPage from "./page/PostPage";
import Layout from "./Layout";

import "./reset.css";
import "./index.css";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BlogPage />} />
          <Route path="/Post" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
