import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compare_score(player_a, player_b) {
   return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  // console.log("what is player", players)
  // console.log("what is setplayers", set_players)

  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"
  // console.log("usestate", sort_by)

  const sortFunction = sort_by === "score" ? compare_score : compare_name;

    // first "copy" the array, [...players] is the whole array above
  // then sort it with the `compare_score` callback function
  // const players_sorted = [...players].sort(compare_name);  
  // const players_sorted = [...players].sort(compare_score);
  const players_sorted = [...players].sort(sortFunction);

  const change_sorting = event => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };
  // console.log("changesorting", change_sorting)
  
  const incrementScore = (id) => {
      console.log("is this id showing", id)
      const new_players_array = players.map(player => {
        // decide whether this player's score needs to be incremented
        if (player.id === id) {
          // and if so, create a new player object,
          return {
            // but first copying over the player object's data
            ...player,
            // and then overriding the score property to be incremented
            score: player.score + 1
          };
        } else {
          // else, just keep them
          return player;
        }
      });
      set_players(new_players_array)
      console.log("what is", new_players_array)
  }

  return (
    <div className="Scoreboard">
      <h1>Player's Scoreboard</h1>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      {players_sorted.map((player) => (
        <Player 
            id={player.id}
            name={player.name} 
            score={player.score}  
            incrementScore={incrementScore}
      />
      ))}
     
      <AddPlayerForm />
    </div>
  );
}
