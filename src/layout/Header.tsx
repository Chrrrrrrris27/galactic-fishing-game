import { Icon } from "@iconify/react";
import Logo from "../assets/images/logo.webp";
import { NavigationComponent } from "../components/NavigationComponent";

export const Header = () => {
  return (
    <header className="h-20 bg-tapa-900 bg-opacity-90 px-4 py-2 sticky top-0">
      <div className="flex justify-between max-w-5xl h-full mx-auto">
        <div className="h-full rounded-full overflow-hidden">
          <img
            src={Logo}
            alt="Galatactic-Fishing Game"
            className="h-full"
          />
        </div>
        <NavigationComponent/>
      </div>
    </header>
  )
}