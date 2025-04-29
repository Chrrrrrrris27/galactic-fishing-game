import { Icon } from "@iconify/react";
import { Player } from "../interfaces/PlayerInterface";
import { ErrorMessageComponent } from "./ErrorMessageComponent";
import { LoaderComponent } from "./LoaderComponent";

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

export const PlayersListComponent = ({players, isLoading, error}: Props) => {

  if (isLoading) return <LoaderComponent isLoading/>
  if (error) return <ErrorMessageComponent/>;
  
  return (

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
            players && players.map((player) => (
              <tr
                key={player.username}
                className={`border-b border-tapa-50 pb-1 first:rounded-tl-2xl last:border-0 ${player.rank === 1 && "bg-meadow-700 !border-0"} ${player.rank === 2 && "bg-meadow-600 !border-0"} ${player.rank === 3 && "bg-meadow-500 !border-0"}`}
              >
                <td className="p-4 w-14 pl-10 sm:pl-4 border-r border-tapa-50 sm:text-center">
                  {player.rank}
                </td>
                <td className="p-4 pl-10 sm:pl-4 border-r border-tapa-50 text-ellipsis overflow-hidden">
                  {player.username}
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
  )
}