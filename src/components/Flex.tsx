import {
  createElement,
  forwardRef,
  type ElementType,
  type ForwardedRef
} from 'react';
// @ts-expect-error: Doesn't come with types
import { splitProps } from '../../styled-system/helpers';
import {
  styled,
  type HTMLStyledProps
} from '../../styled-system/jsx';
import type { DistributiveOmit } from '../../styled-system/types/system-types';
import {
  flex,
  type FlexProperties
} from '../../styled-system/patterns/flex';

const defaultElement = 'div';

type AsProp<C extends ElementType> = {
  as?: C;
};

export type FlexProps<C extends ElementType> = AsProp<C> &
  FlexProperties &
  DistributiveOmit<HTMLStyledProps<C>, keyof FlexProperties>;

export const Flex = forwardRef(
  <C extends ElementType>(
    props: FlexProps<C>,
    ref: ForwardedRef<C>
  ) => {
    const [patternProps, restPropsWithAs] = splitProps(props, []);
    const { as = defaultElement, ...restProps } = restPropsWithAs;

    const styleProps = flex.raw(patternProps);
    const mergedProps = { ref, ...styleProps, ...restProps };

    return createElement(styled(as), mergedProps);
  }
);
