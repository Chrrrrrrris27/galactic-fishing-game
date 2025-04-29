import React, { useEffect, useState } from 'react'
import { SwitchOption } from '../interfaces/SwitchOptionInterface';

type Props = {
  options: SwitchOption[],
  defaultOption?: number,
  setOption: (option: number) => void,
}

export const SwitchButtonComponent = ({options, defaultOption, setOption}: Props) => {

  const [activeOption, setActiveOption] = useState<number | undefined>();

  useEffect(() => {
    if (defaultOption) {
      setOption(defaultOption);
      setActiveOption(defaultOption);
    } else {
      setOption(options[0].id)
      setActiveOption(options[0].id)
    }
    
  }, [setOption, defaultOption, options])

  const handleClickOption = (option: number) => {
    setOption(option);
    setActiveOption(option);
  }

  const widthClass = {
    1: 'w-1/1',
    2: 'w-1/2',
    3: 'w-1/3',
    4: 'w-1/4',
    5: 'w-1/5',
    6: 'w-1/6',
    12: 'w-1/12',
  }[options.length] || 'w-full'
  
  return (
    <div className='bg-tapa-600 flex gap-2 overflow-x-auto max-w-full mx-auto my-4 px-1 py-1 rounded-2xl scrollbar-light'>
      {
        options && options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleClickOption(option.id)}
            className={`${activeOption === option.id && "bg-meadow-300 text-meadow-900"} p-2 rounded-xl ${widthClass}`}
          >
            {option.name}
          </button>
        ))
      }
    </div>
  )
}