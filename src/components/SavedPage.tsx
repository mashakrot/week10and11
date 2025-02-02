import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

interface Joke {
  id: number;
  setup: string;
  punchline: string;
}

interface SavedPageProps {
  savedJokes: Joke[];
  deleteJoke: (id: number) => void;
}

const SavedPage: React.FC<SavedPageProps> = ({ savedJokes, deleteJoke }) => {
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      {savedJokes.length === 0 ? (
        <Typography variant="h6">No saved jokes yet.</Typography>
      ) : (
        savedJokes.map((joke) => (
          <Card key={joke.id} variant="outlined" sx={{ maxWidth: 400, margin: "auto", marginBottom: 2, padding: 2 }}>
            <CardContent>
              <Typography variant="h6">{joke.setup}</Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>{joke.punchline}</Typography>
              <Button variant="contained" color="error" onClick={() => deleteJoke(joke.id)} sx={{ marginTop: 2 }}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default SavedPage;
