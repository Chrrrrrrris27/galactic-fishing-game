import { Icon } from "@iconify/react";
import { Player } from "../interfaces/PlayerInterface";
import { LoaderComponent } from "./LoaderComponent";
import { PaginationComponent } from "./PaginationComponent";
import { useEffect, useState } from "react";
import { useOnlineVerification } from "../hooks/useOnlineVerification";
import { EnumStorageTypes, useStorage } from "../hooks/useStorage";
import { EnumStorageKeys } from '../enums/enumStorageKeys';
import { RankingStorageInterface } from '../interfaces/StorageInterfaces';
import { LastUpdateMessageComponent } from "./LastUpdaateMessageComponent";

type Props = {
  players: Player[] | undefined,
  isLoading: boolean,
  error: Error | null
}

interface TableHeaderInterface {
  column: string,
  icon: string,
  color?: string
}

const tableHeaders: TableHeaderInterface[] = [
  {
    column: "Rank",
    icon: "icon-park-outline:ranking"
  },
  {
    column: "Username",
    icon: "ri:user-fill"
  },
  {
    column: "Level",
    icon: "fluent-emoji-high-contrast:top-arrow"
  },
  {
    column: "XP",
    icon: "fxemoji:fish"
  },
  {
    column: "Gold",
    icon: "streamline:gold-solid",
    color: "yellow"
  }
]

const defaultPage = 1;
const itemsPerPage = 15;
const pagesToShow = 4;

export const PlayersListComponent = ({players, isLoading, error}: Props) => {

  const { getStorageItem } = useStorage(EnumStorageTypes.local);

  const [currentPlayers, setCurrentPlayers] = useState<Player[]>();
  const [totalPlayers, setTotalPlayers] = useState<Player[]>(getStorageItem(EnumStorageKeys.RANKING)?.ranking);
  const [storageRankingDate, setStorageRankingDate] = useState<Date>();
  const [currentPage, setCurrentPage] = useState<number>(defaultPage);

  const online = useOnlineVerification();

  useEffect(() => {
    if (players && online) {
      setCurrentPlayers(players.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
      setTotalPlayers(players);
    } else {
      const storagePlayers = getStorageItem(EnumStorageKeys.RANKING) as RankingStorageInterface;
      if (storagePlayers) {
        setStorageRankingDate(new Date(storagePlayers.time));
        setCurrentPlayers(storagePlayers.ranking.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
        setTotalPlayers(storagePlayers.ranking);
      }
    }
    
  }, [players, currentPage, online])
  

  if (isLoading) return <LoaderComponent isLoading/>
  
  return (
    <div>
      <LastUpdateMessageComponent
        showMessage={!!error || !online}
        date={storageRankingDate}
      />
      <div className="bg-tapa-900 rounded-2xl max-w-full overflow-x-auto">
        <table className="table-auto sm:table-fixed w-full min-w-[600px] border-collapse">
          <thead className="text-left bg-tapa-700">
            <tr>

              {
                tableHeaders.map((header, index) => (
                  <th key={index} className="border-b border-r border-tapa-50 p-4 pb-2 first:rounded-tl-2xl last:rounded-tr-2xl last:border-r-0">
                    <div className={`flex gap-1 items-center justify-center ${header.column === "Username" && "sm:!justify-center !justify-start"}`}>
                      <Icon icon={header.icon} color={header.color} fontSize={20}/>
                      <span className="sm:hidden">{header.column}</span>
                    </div>
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              currentPlayers && currentPlayers.map((player) => (
                <tr
                  key={player.username}
                  className={`border-b border-tapa-50 pb-1 first:rounded-tl-2xl last:border-0 ${player.rank === 1 && "bg-meadow-700 !border-0"} ${player.rank === 2 && "bg-meadow-600 !border-0"} ${player.rank === 3 && "bg-meadow-500 !border-0"}`}
                >
                  <td className="p-4 w-14 pl-10 sm:pl-4 border-r border-tapa-50 sm:text-center">
                    {player.rank}
                  </td>
                  <td className="p-4 pl-10 sm:pl-4 border-r border-tapa-50 text-ellipsis overflow-hidden relative">
                    {player.username}
                    <span className="ml-1 sm:ml-0" title={player.emojiDescription}>
                      {player.fishEmojis}
                    </span>
                    {
                      player.isInfected &&
                      <span className="absolute top-[50%] translate-y-[-50%] right-2 text-danger animate-pulse text-lg">
                        <Icon
                          icon={"emojione-monotone:skull-and-crossbones"}
                        />
                      </span>
                    }
                  </td>
                  <td className="p-4 text-center border-r border-tapa-50">
                    {player.level}
                  </td>
                  <td className="p-4  text-center border-r border-tapa-50">
                    {player.xp}
                  </td>
                  <td className="p-4 text-center">
                    {player.gold}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <PaginationComponent
        itemsPerPage={itemsPerPage}
        totalItems={totalPlayers.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesToShow={pagesToShow}
      />
    </div>
  )
}