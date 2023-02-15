import React, { ReactNode } from 'react'
//@ts-ignore
import { useCssHandles } from "vtex.css-handles"
import "../../style/index.css"


interface Props{
    elementOne: ReactNode,
    elementTwo: ReactNode
}

export const GridItemSmall = ({ elementOne, elementTwo }: Props) => {

    const CSS_HANDLES = [
        "grid__itemSmall"
    ]
    const handles = useCssHandles(CSS_HANDLES)


  return (
    <div className={ handles["grid__itemSmall"]}>
      {elementOne}
      {elementTwo}
    </div>
  )
}
