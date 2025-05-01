import { Icon } from '@iconify/react'
import { MarketItem } from '../interfaces/MarketItemInterface'

type Props = {
  item: MarketItem
}

export const MarketItemComponent = ({item}: Props) => {

  const getItemIcon = (type: string): string => {
    if (type.includes("fishing")) return "fluent-emoji-flat:fishing-pole";
    if (type.includes("poison")) return "game-icons:spiral-bottle";
    return "entypo:new";
  }
  return (
    <article className='bg-tapa-900 rounded-2xl flex flex-col p-4 border-meadow-300 border-4'>
      <header className='flex gap-1 items-start'>

        <span className='text-3xl'>
          <Icon
            icon={getItemIcon(item.type)}
            // fontSize={40}
            color='purple'
          />
        </span>
        <h3 className='font-title text-3xl'>{item.name}</h3>
      </header>
      <main className='text-lg pb-3 mt-1'>
        <p>
          {item.description}
        </p>
      </main>
      <footer className='flex justify-end border-t-2 border-meadow-300 pt-3 mt-auto'>
        <div className='bg-meadow-300 p-2 rounded-md flex items-center gap-1'>
          <Icon
            icon={"streamline:gold-solid"}
            color='yellow'
            fontSize={24}
          />
          <span className='text-tapa-800 font-semibold'>
            {item.cost}
          </span>
        </div>
      </footer>
    </article>
  )
}