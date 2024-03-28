import {
  cva,
  type RecipeVariantProps
} from '../../styled-system/css';
import { Box } from './Box';

const button = cva({
  base: {
    display: 'inline-block',
    width: '100%',
    height: '2rem',
    px: 'm',
    py: 'xs',
    border: `thin`,
    borderColor: 'primary',
    borderRadius: 'round',
    fontSize: 'm',
    fontFamily: 'body',
    textDecoration: 'none',
    textAlign: 'center'
  },
  variants: {
    variant: {
      primary: {
        color: 'background',
        backgroundColor: 'primary'
      },
      secondary: {
        color: 'primary',
        backgroundColor: 'background'
      }
    }
  }
});

type ButtonVariants = RecipeVariantProps<typeof button>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export function Button({
  variant = 'secondary',
  ...props
}: ButtonProps) {
  return (
    <Box
      as="button"
      className={button({ variant })}
      {...props}
      css={{
        '&:hover:not(:disabled)': {
          outline: 0,
          color: 'background',
          borderColor: 'accent',
          backgroundColor: 'accent',
          cursor: 'pointer'
        },
        _focusVisible: {
          outline: 'focus',
          outlineOffset: 2
        },
        _disabled: {
          opacity: 0.6,
          filter: 'saturate(60%)'
        }
      }}
    />
  );
}
