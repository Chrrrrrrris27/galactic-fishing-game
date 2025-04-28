import axios from "axios";
import { Player } from "../interfaces/PlayerInterface";
import { LeaderboardResponse } from "../interfaces/LeaderboardResponseInterface";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const getPlayers = async (): Promise<Player[]> => {
  const response = await api.get<LeaderboardResponse>("/leaderboard");
  return response.data.players;
}