import React, { useState } from 'react'
import { PlayersListComponent } from '../components/PlayersListComponent'
import { MarketComponent } from '../components/MarketComponent'
import { SwitchButtonComponent } from '../components/SwitchButtonComponent'
import { SwitchOption } from '../interfaces/SwitchOptionInterface'
import { useFetchQuery } from '../hooks/useFetchQuery'
import { getMarket, getPlayers } from '../lib/api'

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


  const { data: players, error: errorPlayers, isLoading: isLoadingPlayers } = useFetchQuery(
    ["players"],
    getPlayers
  );

  const { data: items, error: errorMarket, isLoading: isLoadingMarket } = useFetchQuery(
    ["market"],
    getMarket
  );

  const [selectedOption, setSelectedOption] = useState<number | undefined>();

  return (
    <>
      <div className='my-20'>
        <h1
          className='font-title text-7xl text-center text-meadow-400'
          title='Galactic-Fishing Game'
        >
          Galactic-Fishing Game
        </h1>
      </div>
      <div className='w-96 max-w-full mx-auto'>
        <SwitchButtonComponent
          options={switchOptions}
          defaultOption={1}
          setOption={setSelectedOption}
        />
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