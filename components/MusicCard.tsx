type Props = {
  music: {
    id: string;
    title: string;
    artist: string;
    album: string;
    cover: string | null;
    preview_url: string | null;
    spotify_url: string;
  };
};

export default function MusicCard({ music }: Props) {
  return (
    <a href={music.spotify_url} target="_blank" rel="noopener" className="card">
      {music.cover && <img src={music.cover} alt={music.title} />}
      <div className="meta">
        <h3>{music.title}</h3>
        <p>{music.artist}</p>
        <small>{music.album}</small>
        {music.preview_url && (
          <audio controls src={music.preview_url} style={{ width: '100%', marginTop: 8 }} />
        )}
      </div>
      <style jsx>{`
        .card { display: block; border: 1px solid #eee; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; }
        img { width: 100%; height: 220px; object-fit: cover; }
        .meta { padding: 12px; }
        h3 { margin: 0 0 6px; font-size: 1rem; }
        p { margin: 0 0 4px; color: #555; }
        small { color: #888; }
      `}</style>
    </a>
  );
}
