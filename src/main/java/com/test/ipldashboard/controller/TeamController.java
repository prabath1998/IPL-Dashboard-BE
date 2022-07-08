package com.test.ipldashboard.controller;

import com.test.ipldashboard.model.Team;
import com.test.ipldashboard.repository.MatchRepository;
import com.test.ipldashboard.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private MatchRepository matchRepository;

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team = this.teamRepository.findByTeamName(teamName);
         team.setMatches(this.matchRepository.findLatestMatchesByName(teamName,4));
        return team;
    }
}
