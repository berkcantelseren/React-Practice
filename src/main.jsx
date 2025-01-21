import { createRoot } from "react-dom/client";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <MainContent />
    <Footer />
  </>
);
