import { useState } from "react";

interface Joke {
  id: number;
  setup: string;
  punchline: string;
}

const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);

  const saveJoke = (joke: Joke): boolean => {
    if (!savedJokes.some((savedJoke) => savedJoke.id === joke.id)) {
      setSavedJokes((prevJokes) => [...prevJokes, joke]);
      return true;
    }
    return false;
  };

  const deleteJoke = (id: number) => {
    setSavedJokes((prevJokes) => prevJokes.filter((joke) => joke.id !== id));
  };

  return { savedJokes, saveJoke, deleteJoke };
};

export default useJokes;
