import { useFetchQuery } from "../hooks/useFetchQuery"
import { getPlayers } from "../lib/api";
import { ErrorMessageComponent } from "./ErrorMessageComponent";
import { LoaderComponent } from "./LoaderComponent";

export const PlayersListComponent = () => {

  const { data: players, error, isLoading } = useFetchQuery(
    ["players"],
    getPlayers
  );

  if (isLoading) return <LoaderComponent isLoading/>
  if (error) return <ErrorMessageComponent/>;
  console.log(players);
  return (
    <table>
      Rank
    </table>
  )
}