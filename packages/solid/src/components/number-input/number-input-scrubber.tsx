import { mergeProps } from '@zag-js/solid'
import { type HTMLArkProps, ark } from '../factory'
import { useNumberInputContext } from './use-number-input-context'

export interface NumberInputScrubberProps extends HTMLArkProps<'div'> {}

export const NumberInputScrubber = (props: NumberInputScrubberProps) => {
  const api = useNumberInputContext()
  const mergedProps = mergeProps(() => api().getScrubberProps(), props)

  return <ark.div {...mergedProps} />
}
