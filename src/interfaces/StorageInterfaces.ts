import { MarketItem } from "./MarketItemInterface";
import { Player } from "./PlayerInterface";

export interface RankingStorageInterface {
  time: number,
  ranking: Player[]
}

export interface MarketStorageInterface {
  time: number,
  market: MarketItem[]
}