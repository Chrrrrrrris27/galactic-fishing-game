import { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

type Props = {
  children: ReactNode
}

export const Layout = (props: Props) => {
  return (
    <>
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </>
  )
}
