import React, { ReactNode} from 'react';
import { customGridSchema } from '../../schemas/custom-grid-schema';
import { GridItemBig } from '../GridItemBig/GridItemBig';
import { GridItemSmall } from '../GridItemSmall/GridItemSmall';
//@ts-ignore
import { useCssHandles } from "vtex.css-handles"
import "../../style/index.css"

interface Props{
    gridType: number
    children: [
      ReactNode,
      ReactNode,
      ReactNode,
      ReactNode,
      ReactNode
    ]
}

export const CustomGrid = ({gridType = 2, children}: Props) => {

    const CSS_HANDLES = [
        `grid__${gridType}`
    ]
    const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles[`grid__${gridType}`]} mt7`}>
      <GridItemBig
      element = {children[0]}
      />
      <GridItemSmall
      elementOne = {children[1]}
      elementTwo = {children[2]}
      />
      <GridItemSmall
      elementOne = {children[3]}
      elementTwo = {children[4]}
      />
    </div>
  )
}

CustomGrid.schema = customGridSchema
