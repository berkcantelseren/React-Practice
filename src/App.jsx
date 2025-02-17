import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import "./App.css";
import data from "./data.js";

export default function App() {
  const entryElements = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <>
      <Navbar />
      <main className="container">{entryElements}</main>
    </>
  );
}
