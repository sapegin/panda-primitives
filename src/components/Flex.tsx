import {
  createElement,
  forwardRef,
  type ElementType,
  type Ref,
  type ReactElement
} from 'react';
// @ts-expect-error: Doesn't come with types
import { splitProps } from '../../styled-system/helpers';
import {
  styled,
  type HTMLStyledProps
} from '../../styled-system/jsx';
import { flex } from '../../styled-system/patterns/flex';

type AsProp<C extends ElementType> = {
  as?: C;
};

export type FlexProps<C extends ElementType> = HTMLStyledProps<C> &
  AsProp<C>;

function FlexRaw<C extends ElementType>({
  as,
  ...props
}: FlexProps<C>) {
  const [patternProps, restProps] = splitProps(props, []);

  const styleProps = flex.raw(patternProps);
  const mergedProps = { ...styleProps, ...restProps };

  return createElement(styled(as ?? 'div'), mergedProps);
}

// XXX: forwardRef kills the types so we readd them back
// https://stackoverflow.com/a/58473012/1973105
export const Flex = forwardRef(FlexRaw) as <
  C extends ElementType = 'div'
>(
  props: FlexProps<C> & { ref?: Ref<C> }
) => ReactElement;
