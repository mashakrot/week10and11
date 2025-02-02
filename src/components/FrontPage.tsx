import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, CircularProgress } from "@mui/material";

interface Joke {
  id: number;
  setup: string;
  punchline: string;
}

interface FrontPageProps {
  saveJoke?: (joke: Joke) => boolean;
}

const FrontPage: React.FC<FrontPageProps> = ({ saveJoke }) => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = () => {
    setLoading(true);
    const controller = new AbortController();
    fetch("https://official-joke-api.appspot.com/random_joke", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    return () => controller.abort();
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      {loading ? <CircularProgress /> : joke && (
        <Card variant="outlined" sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
          <CardContent>
            <Typography variant="h6">{joke.setup}</Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>{joke.punchline}</Typography>
          </CardContent>
        </Card>
      )}

      <Button variant="contained" color="primary" onClick={fetchJoke} sx={{ marginTop: 2 }}>New Joke</Button>
      {saveJoke && joke && (
        <Button variant="contained" color="secondary" onClick={() => saveJoke(joke)} sx={{ marginLeft: 2, marginTop: 2 }}>
          Save Joke
        </Button>
      )}
    </div>
  );
};

export default FrontPage;
