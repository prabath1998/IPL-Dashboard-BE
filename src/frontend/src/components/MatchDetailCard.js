import { Link } from "react-router-dom";

export const MatchDetalCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className="MatchDetailCard">
      <h3>Latest Matches</h3>
      <Link to={otherTeamRoute}>
        <h1>vs {otherTeam}</h1>
      </Link>
      <h2>{match.date}</h2>
      <h3>at {match.city}</h3>
      <h3>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h3>
    </div>
  );
};
