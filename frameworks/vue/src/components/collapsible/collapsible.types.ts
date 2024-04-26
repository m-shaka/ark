import type * as collapsible from '@zag-js/collapsible'

export interface RootProps {
  /**
   * Whether the collapsible is disabled
   */
  disabled?: boolean

  /**
   * The unique identifier of the machine.
   */
  id?: string
  /**
   * The ids of the elements in the collapsible. Useful for composition.
   */
  ids?: Partial<{ root: string; content: string; trigger: string }>
  /**
   * Whether to enable lazy mounting
   * @default false
   */
  lazyMount?: boolean
  /**
   * Whether the collapsible is open
   */
  open?: boolean
  /**
   * Whether to unmount on exit.
   * @default false
   */
  unmountOnExit?: boolean
}

export type RootEmits = {
  /**
   * Function called when the animation ends in the closed state.
   */
  exitComplete: []
  /**
   * Function called when the popup is opened
   */
  openChange: [details: collapsible.OpenChangeDetails]
}
