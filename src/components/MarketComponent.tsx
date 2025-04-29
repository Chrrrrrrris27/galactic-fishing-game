import { MarketItem } from "../interfaces/MarketItemInterface";
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
    <section className="grid grid-cols-3 gap-5 lg:grid-cols-2 sm:grid-cols-1">
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