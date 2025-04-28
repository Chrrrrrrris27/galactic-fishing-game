import { MarketItem } from '../interfaces/MarketItemInterface'

type Props = {
  item: MarketItem
}

export const MarketItemComponent = ({item}: Props) => {
  return (
    <article>
      <header>
        <h3>{item.name}</h3>
      </header>
      <main>
        <p>
          {item.description}
        </p>
      </main>
      <footer>
        <span>{item.cost}</span>
      </footer>
    </article>
  )
}