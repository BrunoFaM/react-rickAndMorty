import CharacterList from "./components/CharacterList";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-zinc-800 text-white ">
      <div className="text-center">
        <motion.h1
          whileHover={{ color: "white", rotateZ: -10 }}
          transition={{ duration: 0.3 }}
          className="inline-block m-auto text-4xl sm:text-5xl lg:text-7xl text-green-500 font-rick-morty pt-10 pl-4"
        >
          Rick and Morty
        </motion.h1>
      </div>

      <CharacterList />
    </div>
  );
}

export default App;
