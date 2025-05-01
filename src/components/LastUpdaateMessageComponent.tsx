import { Icon } from '@iconify/react'
import React from 'react'

type Props = {
  showMessage: boolean,
  date: Date | undefined
}

export const LastUpdateMessageComponent = ({ showMessage, date }: Props) => {
  return (
    <div className={`hidden my-4 items-center justify-end gap-1 ${showMessage && "!flex"}`}>
        <span>
          <Icon
            icon={"clarity:no-wifi-solid"}
          />
        </span>
        <span>{`Last update: ${date ? date.toLocaleDateString() + "-" + date.toLocaleTimeString() : ""}`}</span>
      </div>
  )
}
