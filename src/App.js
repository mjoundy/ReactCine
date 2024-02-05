import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { useState } from "react";
import logo from "./assets/Netflix vrai.jpg"

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-slate-500">
      {/* <Navbar /> */}
      <header className="bg-[#101010] flex justify-between items-center px-[50px] py-[25px]">
        <a href="/">
          <img src={logo} alt="logo" className="h-[60px]" />
        </a>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search here!"
          className="bg-[#525073] px-[15px] py-[10px] rounded-md w-[350px]"
        />
      </header>
      <MovieList searchValue={search.toLowerCase()} />
    </div>
  );
}

export default App;
