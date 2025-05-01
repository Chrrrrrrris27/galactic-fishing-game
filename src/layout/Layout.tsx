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
      <main className="mx-auto max-w-5xl px-4 py-5 w-full ">
        {props.children}
      </main>
      <Footer/>
    </>
  )
}
