import { MatchDetalCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  return (
    <div className="TeamPage">
      <h1>Team Name</h1>
      <MatchDetalCard />
      <MatchSmallCard />
      <MatchSmallCard />
      <MatchSmallCard />
    </div>
  );
};
