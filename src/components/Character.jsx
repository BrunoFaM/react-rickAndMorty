import { motion } from "framer-motion";

function Character({ character }) {
  return (
    <div className="p-5 group flex flex-col lg:text-xl">
      <h3 className="group-hover:font-rick-morty">{character.name}</h3>
      <motion.img
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.4  }}
        className=" mt-2 object-cover rounded-full place-self-center w-[70%]"
        src={character.image}
        alt={character.name}
      />
      <p className="text-right group-hover:font-rick-morty group-hover:text-green-500">
        {character.origin.name === "unknown" ? "???" : character.origin.name}
      </p>
    </div>
  );
}

export default Character;
