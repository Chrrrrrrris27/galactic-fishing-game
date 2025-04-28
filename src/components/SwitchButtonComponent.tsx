import React, { useEffect, useState } from 'react'
import { SwitchOption } from '../interfaces/SwitchOptionInterface';

type Props = {
  options: SwitchOption[],
  defaultOption?: number,
  setOption: (option: number) => void,
}

export const SwitchButtonComponent = ({options, defaultOption, setOption}: Props) => {

  useEffect(() => {
    if (defaultOption) {
      setOption(defaultOption);
    } else {
      setOption(options[0].id)
    }
    
  }, [setOption, defaultOption, options])

  const handleClickOption = (option: number) => {
    setOption(option);
  }
  
  return (
    <div>
      {
        options && options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleClickOption(option.id)}
          >
            {option.name}
          </button>
        ))
      }
    </div>
  )
}