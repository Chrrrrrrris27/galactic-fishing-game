import { Icon } from '@iconify/react'
import React from 'react'

export interface navItemInterface {
  name: string,
  icon: string,
  link: string
}
export const navItems: navItemInterface[] = [
  {
    name: "Github",
    icon: "mingcute:github-fill",
    link: "https://github.com/Chrrrrrrris27/galactic-fishing-game"
  },
  {
    name: "Linkedin",
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/christian-aguilar-junca"
  },
  {
    name: "Portfolio",
    icon: "carbon:portfolio",
    link: "https://christian-aguilar-portfolio.vercel.app/en"
  },
]

export const NavigationComponent = () => {
  return (
    <nav>
      <ul className="flex items-center h-full gap-2">
        {
          navItems.map((item, index) => (
          <li
            key={index}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              title={item.name}
              className="text-4xl hover:text-meadow-300"
            >
              <Icon
                icon={item.icon}
              />
            </a>
          </li>
          ))
        }
      </ul>
    </nav>
  )
}
