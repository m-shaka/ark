import { mergeProps } from '@zag-js/solid'
import { type HTMLArkProps, ark } from '../factory'
import { usePopoverContext } from './use-popover-context'

export interface PopoverArrowTipProps extends HTMLArkProps<'div'> {}

export const PopoverArrowTip = (props: PopoverArrowTipProps) => {
  const popover = usePopoverContext()
  const mergedProps = mergeProps(() => popover().getArrowTipProps(), props)

  return <ark.div {...mergedProps} />
}
