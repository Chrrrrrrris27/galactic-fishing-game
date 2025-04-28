import axios from "axios";
import { Player } from "../interfaces/PlayerInterface";
import { LeaderboardResponse } from "../interfaces/LeaderboardResponseInterface";
import { MarketItem } from "../interfaces/MarketItemInterface";
import { MarketResponseInterface } from "../interfaces/MarketResponseInterface";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const getPlayers = async (): Promise<Player[]> => {
  const response = await api.get<LeaderboardResponse>("/leaderboard");
  return response.data.players;
}

export const getMarket = async (): Promise<MarketItem[]> => {
  const response = await api.get<MarketResponseInterface>("/market");
  return response.data.items;
}