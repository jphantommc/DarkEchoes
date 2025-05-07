import { useState } from 'react';
import { episodeList } from './data';

export default function App() {

  // TODO
  const [selectedEpisode, setSelectedEpisode] = useState();



function EpisodeDescription({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <section className="episode description">
        <h2> Description</h2>
        <p>Select an episode to see its description.</p>
      </section>
    );
  
}
return (
  <section className="episode description">
    <h2>Episode {selectedEpisode.id}</h2>
    <h3>{selectedEpisode.title}</h3>
    <p>{selectedEpisode.description}</p>
    <button>Watch Now!</button>
    </section>
);
}

function EpisodeList({ selectedEpisode, setSelectedEpisode }) {
  const [episodes] = useState(episodeList);
  return (
    <section className = "episodes">
      <h2>Episode Title</h2>
      <ol>
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}
          className={selectedEpisode?.id === episode.id ? "selected" : ""}>
            {episode.title}
          </li>
        ))}
        </ol>
        </section>
  );    
}

return (
  <>
  <header>
    <h1>Dark Echoes</h1>
  </header>
  <main>
    <EpisodeList
      selectedEpisode={selectedEpisode} 
      setSelectedEpisode={setSelectedEpisode}/>
    <EpisodeDescription selectedEpisode={selectedEpisode} />
  </main>
  </>
);
}

