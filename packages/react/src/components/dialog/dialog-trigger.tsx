import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLArkProps, ark } from '../factory'
import { usePresenceContext } from '../presence'
import { useDialogContext } from './use-dialog-context'

export interface DialogTriggerProps extends HTMLArkProps<'button'> {}

export const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>((props, ref) => {
  const dialog = useDialogContext()
  const presence = usePresenceContext()

  const mergedProps = mergeProps(
    {
      ...dialog.getTriggerProps(),
      'aria-controls': presence.unmounted ? undefined : dialog.getTriggerProps()['aria-controls'],
    },
    props,
  )

  return <ark.button {...mergedProps} ref={ref} />
})

DialogTrigger.displayName = 'DialogTrigger'
