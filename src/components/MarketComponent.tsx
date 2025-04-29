import { error } from "console";
import { useFetchQuery } from "../hooks/useFetchQuery";
import { MarketItem } from "../interfaces/MarketItemInterface";
import { getMarket } from "../lib/api";
import { ErrorMessageComponent } from "./ErrorMessageComponent";
import { LoaderComponent } from "./LoaderComponent";
import { MarketItemComponent } from "./MarketItemComponent";

type Props = {
  market: MarketItem[] | undefined,
  isLoading: boolean,
  error: Error | null
}

export const MarketComponent = ({market, isLoading, error}: Props) => {
  
  if (isLoading) return <LoaderComponent isLoading/>
  if (error) return <ErrorMessageComponent/>;

  return (
    <section>
      {
        market && market.map((item) => (
          <MarketItemComponent
            key={item.id}
            item={item}
          />
        ))
      }
    </section>
  )
}