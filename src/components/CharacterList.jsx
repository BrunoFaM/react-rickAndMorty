import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="flex justify-between ml-2 mr-2  items-center">
      <p>Page: {props.page}</p>
      <button
        className="bg-blue-600 rounded text-sm p-[0.5px] hover:p-[0.9px] hover:bg-blue-700"
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Page {props.page + 1}
      </button>
    </header>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return loading ? (
    <div>Loading</div>
  ) : (
    <>
      <NavPage page={page} setPage={setPage} />
      <div className="grid grid-cols-3 gap-1  ml-8 mr-8">
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
      <NavPage page={page} setPage={setPage} />
    </>
  );
}

export default CharacterList;
