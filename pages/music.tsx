import MusicCard from '@/components/MusicCard';
/* eslint-disable @next/next/no-img-element */

type Music = {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string | null;
  preview_url: string | null;
  spotify_url: string;
};

interface SpotifyArtist {
  name: string;
}

interface SpotifyAlbum {
  name: string;
  images?: { url: string }[];
}

interface SpotifyTrack {
  id: string;
  name: string;
  artists?: SpotifyArtist[];
  album?: SpotifyAlbum;
  preview_url?: string | null;
  external_urls?: { spotify?: string };
}

interface MusicPageProps {
  musics: Music[];
  artistName: string;
}

const MusicPage = ({ musics, artistName }: MusicPageProps) => {
  return (
    <div className="layout">
      <h1 className="pageTitle">My Music</h1>
      <p className="pageSubtitle">
        Top tracks from <strong>{artistName}</strong> on{' '}
        <a
          href="https://open.spotify.com/artist/4Se8s9q1npJNlYflRqV15V"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          Spotify
        </a>
        .
      </p>
      <div className="container">
        {Array.isArray(musics) &&
          musics.map((m) => <MusicCard key={m.id} music={m} />)}
      </div>
      <style jsx>{`
        .layout { max-width: 1080px; margin: 0 auto; padding: 2rem 1rem; }
        .pageTitle { font-size: 2rem; font-weight: 700; margin-bottom: .5rem; }
        .pageSubtitle { color: #666; margin-bottom: 1.5rem; }
        .container { display: grid; gap: 16px; grid-template-columns: repeat(auto-fill,minmax(220px,1fr)); }
        .underline { text-decoration: underline; }
      `}</style>
    </div>
  );
};

export async function getStaticProps() {
  const ARTIST_ID = '4Se8s9q1npJNlYflRqV15V';
  
  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(
          process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  });

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;

  const res = await fetch(
    `https://api.spotify.com/v1/artists/${ARTIST_ID}/top-tracks?market=ID`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  const data: { tracks?: SpotifyTrack[] } = await res.json();

  const musics: Music[] = (data.tracks || []).slice(0, 12).map((t) => ({
    id: t.id,
    title: t.name,
    artist: t.artists?.map((a) => a.name).join(', ') ?? '',
    album: t.album?.name ?? '',
    cover: t.album?.images?.[0]?.url ?? null,
    preview_url: t.preview_url ?? null,
    spotify_url: t.external_urls?.spotify ?? `https://open.spotify.com/track/${t.id}`,
  }));

  return {
    props: {
      title: 'Music',
      musics,
      artistName: data.tracks?.[0]?.artists?.[0]?.name ?? 'Artist',
    },
    revalidate: 300,
  };
}

export default MusicPage;
