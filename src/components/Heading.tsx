import { type ElementType } from 'react';
import {
  cva,
  type RecipeVariantProps
} from '../../styled-system/css';
import { Box, type AsProp } from './Box';

const heading = cva({
  base: {
    color: 'text',
    fontFamily: 'heading',
    fontWeight: 'bold',
    lineHeight: 'heading'
  },
  variants: {
    level: {
      1: {
        fontSize: 'xl'
      },
      2: {
        fontSize: 'l'
      },
      3: {
        fontSize: 'm',
        fontStyle: 'italic'
      }
    }
  }
});

type HeadingVariants = RecipeVariantProps<typeof heading>;

type HeadingProps<C extends ElementType> =
  React.HTMLAttributes<HTMLHeadingElement> &
    HeadingVariants &
    AsProp<C>;

export function Heading<C extends ElementType = 'h1'>({
  level = 1,
  ...props
}: HeadingProps<C>) {
  return (
    <Box
      as={level ? `h${level}` : 'h1'}
      className={heading({ level })}
      {...props}
    />
  );
}
