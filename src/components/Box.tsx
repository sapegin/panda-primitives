import {
  createElement,
  forwardRef,
  type ElementType,
  type Ref,
  type ReactElement
} from 'react';
// @ts-expect-error: Doesn't come with types ;-(
import { splitProps } from '../../styled-system/helpers';
import {
  styled,
  type HTMLStyledProps
} from '../../styled-system/jsx';
import { box } from '../../styled-system/patterns/box';

export type AsProp<C extends ElementType> = {
  as?: C;
};

export type BoxProps<C extends ElementType> = HTMLStyledProps<C> &
  AsProp<C>;

function BoxRaw<C extends ElementType>({
  as,
  ...props
}: BoxProps<C>) {
  const [patternProps, restProps] = splitProps(props, []);

  const styleProps = box.raw(patternProps);
  const mergedProps = { ...styleProps, ...restProps };

  return createElement(styled(as ?? 'div'), mergedProps);
}

// XXX: forwardRef kills the types so we readd them back
// https://stackoverflow.com/a/58473012/1973105
export const Box = forwardRef(BoxRaw) as <
  C extends ElementType = 'div'
>(
  props: BoxProps<C> & { ref?: Ref<C> }
) => ReactElement;
