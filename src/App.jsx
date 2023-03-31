import CharacterList from "./components/CharacterList"

function App() {
  return <div className="bg-zinc-800 text-white ">
    <h1 className="text-center text-4xl sm:text-5xl lg:text-7xl text-green-500 font-rick-morty pt-10 pl-4">Rick and Morty</h1>
    <CharacterList />
  </div>;
}

export default App;
