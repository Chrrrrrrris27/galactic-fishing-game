import Logo from "../assets/images/logo.webp";
import { NavigationComponent } from "../components/NavigationComponent";

export const Footer = () => {
  return (
    <footer className='bg-tapa-900 py-4 px-3'>
      <div className="max-w-5xl mx-auto">
        <section className="flex items-center justify-between flex-wrap sm:justify-center sm:flex-col gap-2">
          <div
            className="h-20"
          >
            <img
              src={Logo}
              alt="Galatactic-Fishing Game"
              className="h-full rounded-full"
            />
          </div>
          <div>
            <h3 className="text-lg">
              Developed by
              <a
                href="https://christian-aguilar-portfolio.vercel.app/en"
                target="_blank"
                rel="noreferrer"
                className="hover:text-meadow-300 ml-1"
              >
                Christian Aguilar
              </a>
            </h3>
          </div>
          <NavigationComponent/>
        </section>
      </div>
      <div className="border-t border-tapa-50 mt-2 py-2">
        <h4 className="text-right max-w-5xl mx-auto">
          Powered by:
          <a
            href="https://www.bloque.app/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-meadow-300 ml-1"
          >
            Bloque
          </a>
        </h4>
      </div>
    </footer>
  )
}