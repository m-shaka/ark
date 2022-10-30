import { createContext } from '../createContext'
import type { UseAccordionReturn } from './use-accordion'

export type AccordionContext = UseAccordionReturn['api']

export const [AccordionProvider, useAccordionContext] = createContext<AccordionContext>({
  name: 'AccordionContext',
  hookName: 'useAccordionContext',
  providerName: '<AccordionProvider />',
})
