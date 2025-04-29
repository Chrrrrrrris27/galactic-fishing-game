import { Player } from "../interfaces/PlayerInterface";
import { ErrorMessageComponent } from "./ErrorMessageComponent";
import { LoaderComponent } from "./LoaderComponent";

type Props = {
  players: Player[] | undefined,
  isLoading: boolean,
  error: Error | null
}

export const PlayersListComponent = ({players, isLoading, error}: Props) => {

  if (isLoading) return <LoaderComponent isLoading/>
  if (error) return <ErrorMessageComponent/>;
  
  return (
    <table>
      <thead>
        <tr>
          <th>
            Rank
          </th>
          <th>
            User name
          </th>
          <th>
            Level
          </th>
          <th>
            XP
          </th>
          <th>
            Gold
          </th>
        </tr>
      </thead>
      <tbody>
        {
          players && players.map((player) => (
            <tr
              key={player.username}
            >
              <td>
                {player.rank}
              </td>
              <td>
                {player.username}
              </td>
              <td>
                {player.level}
              </td>
              <td>
                {player.xp}
              </td>
              <td>
                {player.gold}
              </td>
            </tr>
          ))
        }
        <tr>
          <td>

          </td>
        </tr>
      </tbody>
    </table>
  )
}