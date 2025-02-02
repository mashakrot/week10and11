import { useState } from "react";

export interface IJoke {
  id: number;
  setup: string;
  punchline: string;
}

export const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<IJoke[]>([]);

  const saveJoke = (joke: IJoke) => {
    if (!savedJokes.some((j) => j.id === joke.id)) {
      setSavedJokes([...savedJokes, joke]);
      return true;
    }
    return false;
  };

  const deleteJoke = (id: number) => {
    setSavedJokes(savedJokes.filter((joke) => joke.id !== id));
  };

  return { savedJokes, saveJoke, deleteJoke };
};

// export default useJokes;
