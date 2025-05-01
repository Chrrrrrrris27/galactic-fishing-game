import React, { useEffect, useState } from 'react'
import { PlayersListComponent } from '../components/PlayersListComponent'
import { MarketComponent } from '../components/MarketComponent'
import { SwitchButtonComponent } from '../components/SwitchButtonComponent'
import { SwitchOption } from '../interfaces/SwitchOptionInterface'
import { useFetchQuery } from '../hooks/useFetchQuery'
import { getMarket, getPlayers } from '../lib/api'
import { EnumStorageTypes, useStorage } from '../hooks/useStorage'
import { EnumStorageKeys } from '../enums/enumStorageKeys'
import { useOnlineVerification } from '../hooks/useOnlineVerification'

const switchOptions: SwitchOption[] = [
  {
    id: 1,
    name: "Leader board"
  },
  {
    id: 2,
    name: "Market"
  }
]
export const HomeSreen = () => {

  const { setStorageItem } = useStorage(EnumStorageTypes.local);
  const online = useOnlineVerification();

  const { data: players, error: errorPlayers, isLoading: isLoadingPlayers } = useFetchQuery(
    ["players"],
    getPlayers,
    {
      enabled: online
    }
  );

  const { data: items, error: errorMarket, isLoading: isLoadingMarket } = useFetchQuery(
    ["market"],
    getMarket,
    {
      enabled: online
    }
  );

  const [selectedOption, setSelectedOption] = useState<number | undefined>();

  useEffect(() => {
    if (players && players.length > 0) {
      setStorageItem(EnumStorageKeys.RANKING, {
        time: new Date().getTime(),
        ranking: players
      });
    } 
  
  }, [players, setStorageItem])

  useEffect(() => {
    if (items && items.length > 0) {
      setStorageItem(EnumStorageKeys.MARKET, {
        time: new Date().getTime(),
        market: items
      });
    } 
  
  }, [items, setStorageItem])
  

  return (
    <>
      <div className='mt-8 mb-10'>
        <span className='text-meadow-50 font-title block text-center text-5xl'>
          Welcome to
        </span>
        <h1
          className='font-title text-8xl text-center text-meadow-50 break-words sm:text-7xl'
          title='Galactic-Fishing Game'
        >
          Galactic-Fishing Game
        </h1>
      </div>
      <div className='w-96 max-w-full mx-auto'>
        {
          !isLoadingPlayers && !isLoadingMarket &&
          <SwitchButtonComponent
            options={switchOptions}
            defaultOption={1}
            setOption={setSelectedOption}
          />
        }
      </div>
      <div className='mt-9'>
        {
          selectedOption === 1 ?
            <PlayersListComponent
              players={players}
              isLoading={isLoadingPlayers}
              error={errorPlayers}
            />
          : <MarketComponent
              market={items}
              isLoading={isLoadingMarket}
              error={errorMarket}
            />
        }
      </div>
    </>
  )
}