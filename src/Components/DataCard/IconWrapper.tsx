import React from "react"
import { GenericProps } from "../../util/props.types"

const IconWrapper = ({ color, children }: GenericProps & { color: string }) => {
  return <div className={color + " rounded-md p-1"}>{children}</div>
}

export default IconWrapper
