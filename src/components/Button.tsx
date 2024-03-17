import {
  cva,
  type RecipeVariantProps
} from '../../styled-system/css';
import { Box } from './Box';

const button = cva({
  base: {
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
    boxSizing: 'border-box',
    display: 'inline-block',
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

// TODO: Implement focus rings

type ButtonVariants = RecipeVariantProps<typeof button>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

// TODO: See if we can (should?) use built-in conditions, like 'hover'

export const Button = ({ variant, ...props }: ButtonProps) => (
  <Box
    as="button"
    className={button({ variant })}
    {...props}
    css={{
      '&:hover:not(:disabled), &:active:not(:disabled)': {
        outline: 0,
        color: 'background',
        borderColor: 'accent',
        backgroundColor: 'accent',
        cursor: 'pointer'
      },
      '&:focus': {
        outline: 'focus',
        outlineColor: 'accent',
        outlineOffset: 2
      },
      '&:disabled': {
        opacity: 0.6,
        filter: 'saturate(60%)'
      }
    }}
  />
);
