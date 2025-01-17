import { mergeProps } from '@zag-js/solid'
import { type HTMLArkProps, ark } from '../factory'
import { useSwitchContext } from './use-switch-context'

export interface SwitchThumbProps extends HTMLArkProps<'span'> {}

export const SwitchThumb = (props: SwitchThumbProps) => {
  const api = useSwitchContext()
  const mergedProps = mergeProps(() => api().getThumbProps(), props)

  return <ark.span {...mergedProps} />
}
