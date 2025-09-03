import { useEffect, useState } from "react";
import "./App.scss";
import type { Profile } from "./types/Profile";
import { getData } from "./utils/httpClient";
import { Link } from "./components/Link";

function App() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    getData().then(setProfiles);
  }, []);

  console.log(profiles[0]);

  return (
    <article className="profile">
      <div className="profile__image">
        <img src={profiles[0]?.photo} alt="Profile photo of developer" />
      </div>
      <h2 className="profile__name">{profiles[0]?.name}</h2>
      <p className="profile__country">{profiles[0]?.country}</p>
      <p className="profile__description">{profiles[0]?.description}</p>
      <ul>
        {profiles[0]?.links.map((l, i) => (
          <Link link={l} key={i} />
        ))}
      </ul>
    </article>
  );
}

export default App;
