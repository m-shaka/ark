import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { Assign } from '../../types'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLArkProps, ark } from '../factory'
import { type UseRatingGroupProps, useRatingGroup } from './use-rating-group'
import { RatingGroupProvider } from './use-rating-group-context'

export interface RatingGroupRootProps extends Assign<HTMLArkProps<'div'>, UseRatingGroupProps> {}

export const RatingGroupRoot = forwardRef<HTMLDivElement, RatingGroupRootProps>((props, ref) => {
  const [useRatingProps, localProps] = createSplitProps<UseRatingGroupProps>()(props, [
    'allowHalf',
    'autoFocus',
    'count',
    'defaultValue',
    'disabled',
    'form',
    'id',
    'ids',
    'name',
    'onHoverChange',
    'onValueChange',
    'readOnly',
    'translations',
    'value',
  ])

  const ratingGroup = useRatingGroup(useRatingProps)
  const mergedProps = mergeProps(ratingGroup.getRootProps(), localProps)

  return (
    <RatingGroupProvider value={ratingGroup}>
      <ark.div {...mergedProps} ref={ref} />
    </RatingGroupProvider>
  )
})

RatingGroupRoot.displayName = 'RatingGroupRoot'
