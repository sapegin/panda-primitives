import { type ElementType } from 'react';
import {
  cva,
  type RecipeVariantProps
} from '../../styled-system/css';
import { Box, type AsProp } from './Box';

const text = cva({
  base: {
    fontFamily: 'body',
    fontWeight: 'normal',
    lineHeight: 'body'
  },
  variants: {
    variant: {
      body: {
        fontSize: 'm',
        color: 'text'
      },
      disclaimer: {
        fontSize: 's',
        color: 'secondary'
      },
      error: {
        fontSize: 'm',
        color: 'error'
      }
    }
  }
});

type TextVariants = RecipeVariantProps<typeof text>;

type TextProps<C extends ElementType> =
  React.HTMLAttributes<HTMLHeadingElement> & TextVariants & AsProp<C>;

export function Text<C extends ElementType = 'p'>({
  variant = 'body',
  ...props
}: TextProps<C>) {
  return <Box as="p" className={text({ variant })} {...props} />;
}
