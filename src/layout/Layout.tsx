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
      <main className="">
        {props.children}
      </main>
      <Footer/>
    </>
  )
}
