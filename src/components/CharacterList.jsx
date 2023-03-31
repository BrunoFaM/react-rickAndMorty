import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="flex sm:justify-around justify-between ml-2 mr-2  items-center pt-8 pb-8 sm:text-lg text-sm">
      <p>Page: {props.page}</p>
      <button
        className="bg-blue-600 rounded  p-[0.5px] lg:p-1 hover:p-[0.9px] hover:bg-blue-700"
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
      <div className="flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-1 gap-5  ml-8 mr-8">
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
      <NavPage page={page} setPage={setPage} />
    </>
  );
}

export default CharacterList;
