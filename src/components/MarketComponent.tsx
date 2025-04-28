import { useFetchQuery } from "../hooks/useFetchQuery";
import { getMarket } from "../lib/api";
import { ErrorMessageComponent } from "./ErrorMessageComponent";
import { LoaderComponent } from "./LoaderComponent";
import { MarketItemComponent } from "./MarketItemComponent";

export const MarketComponent = () => {

  const { data: items, error, isLoading } = useFetchQuery(
      ["market"],
      getMarket
    );
  
  if (isLoading) return <LoaderComponent isLoading/>
  if (error) return <ErrorMessageComponent/>;

  return (
    <section>
      {
        items && items.map((item) => (
          <MarketItemComponent
            key={item.id}
            item={item}
          />
        ))
      }
    </section>
  )
}