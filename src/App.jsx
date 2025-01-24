import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Entry />
      </main>
    </>
  );
}
