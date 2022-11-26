import type { Assign } from '@polymorphic-factory/solid'
import { JSX, mergeProps, splitProps } from 'solid-js'
import { ark, HTMLArkProps } from '../factory'
import { useAccordionContext } from './accordion-context'
import { AccordionItemProvider } from './accordion-item-context'

export type AccordionItemProps = Assign<
  HTMLArkProps<'div'>,
  {
    value: string
    disabled?: boolean
    children?: JSX.Element
    // | ((props: ReturnType<AccordionContext['getItemState']>) => JSX.Element) -> TODO enable render prop fn
  }
>

export const AccordionItem = (props: AccordionItemProps) => {
  const [itemProps, htmlProps] = splitProps(props, ['value', 'disabled'])
  const api = useAccordionContext()
  const mergedProps = mergeProps(api().getItemProps(itemProps), htmlProps)

  return (
    <AccordionItemProvider value={itemProps}>
      <ark.div {...mergedProps} />
    </AccordionItemProvider>
  )
}
