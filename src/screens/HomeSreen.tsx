import React, { useState } from 'react'
import { PlayersListComponent } from '../components/PlayersListComponent'
import { MarketComponent } from '../components/MarketComponent'
import { SwitchButtonComponent } from '../components/SwitchButtonComponent'
import { SwitchOption } from '../interfaces/SwitchOptionInterface'

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

  const [selectedOption, setSelectedOption] = useState<number | undefined>();

  return (
    <>
      <SwitchButtonComponent
        options={switchOptions}
        defaultOption={1}
        setOption={setSelectedOption}
      />
      {
        selectedOption === 1 ?
          <PlayersListComponent/>
        : <MarketComponent/>
      }
    </>
  )
}