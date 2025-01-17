import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLArkProps, ark } from '../factory'
import { useSelectContext } from './use-select-context'

export interface SelectListProps extends HTMLArkProps<'div'> {}

export const SelectList = forwardRef<HTMLDivElement, SelectListProps>((props, ref) => {
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getListProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

SelectList.displayName = 'SelectList'
