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
import {
  stack,
  type StackProperties
} from '../../styled-system/patterns/stack';

type AsProp<C extends ElementType> = {
  as?: C;
};

export type StackProps<C extends ElementType> = AsProp<C> &
  StackProperties &
  HTMLStyledProps<C>;

function StackRaw<C extends ElementType>({
  as,
  ...props
}: StackProps<C>) {
  const [patternProps, restProps] = splitProps(props, ['direction']);

  const styleProps = stack.raw(patternProps);
  const mergedProps = { ...styleProps, ...restProps };

  return createElement(styled(as ?? 'div'), mergedProps);
}

// XXX: forwardRef kills the types so we readd them back
// https://stackoverflow.com/a/58473012/1973105
export const Stack = forwardRef(StackRaw) as <
  C extends ElementType = 'div'
>(
  props: StackProps<C> & { ref?: Ref<C> }
) => ReactElement;
