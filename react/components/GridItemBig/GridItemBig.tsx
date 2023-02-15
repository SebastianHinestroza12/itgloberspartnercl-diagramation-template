import React, { ReactNode } from 'react'
//@ts-ignore
import { useCssHandles } from "vtex.css-handles"
import "../../style/index.css"


interface Props{
  element: ReactNode
}

export const GridItemBig = ({element}: Props) => {

  const CSS_HANDLES = [
        "grid__itemBig"
    ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles["grid__itemBig"]}`}>{ element}</div>
  )
}
