import { useEffect, useState } from "react";
import { EnumStorageTypes, useStorage } from "../hooks/useStorage";
import { MarketItem } from "../interfaces/MarketItemInterface";
import { LoaderComponent } from "./LoaderComponent";
import { MarketItemComponent } from "./MarketItemComponent";
import { EnumStorageKeys } from "../enums/enumStorageKeys";
import { useOnlineVerification } from "../hooks/useOnlineVerification";
import { MarketStorageInterface } from "../interfaces/StorageInterfaces";
import { LastUpdateMessageComponent } from "./LastUpdaateMessageComponent";

type Props = {
  market: MarketItem[] | undefined,
  isLoading: boolean,
  error: Error | null
}

export const MarketComponent = ({market, isLoading, error}: Props) => {

  const { getStorageItem } = useStorage(EnumStorageTypes.local);
  const online = useOnlineVerification();
  const [currentMarket, setCurrentMarket] = useState<MarketItem[]>(getStorageItem(EnumStorageKeys.MARKET)?.market);
  const [storageMarketDate, setStorageMarketDate] = useState<Date>();

  useEffect(() => {
    if (market && online) {
      setCurrentMarket(market);
    } else {
      const storageMarket = getStorageItem(EnumStorageKeys.MARKET) as MarketStorageInterface;
      if (storageMarket) {
        setCurrentMarket(storageMarket.market);
        setStorageMarketDate(new Date(storageMarket.time));
      }
    }
  
    
  }, [market, online])
  
  
  if (isLoading) return <LoaderComponent isLoading/>

  return (
    <div className="mb-5">
      <LastUpdateMessageComponent
        showMessage={!!error || !online}
        date={storageMarketDate}
      />
      <section className="grid grid-cols-3 gap-5 lg:grid-cols-2 sm:grid-cols-1">
        {
          currentMarket && currentMarket.map((item) => (
            <MarketItemComponent
              key={item.id}
              item={item}
            />
          ))
        }
      </section>
    </div>
  )
}