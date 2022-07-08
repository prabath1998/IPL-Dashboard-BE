import { MatchDetalCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { useEffect, useState } from 'react';

export const TeamPage = () => {

  const [team, setTeam] = useState({matches:[]});

  useEffect(() => {

    const fetchMatches = async() => {
      const response = await fetch('http://localhost:8080/team/Chennai Super Kings');
      const data = await response.json();
      console.log(data);
      setTeam(data);
    };
    fetchMatches();
   
  }, []);

  

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetalCard match={team.matches[0]}/>
      {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />)}
      {/* <MatchSmallCard /> */}
    </div>
  );
};
