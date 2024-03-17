import { Box } from './Box';

// TODO: Implement focus rings

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => (
  <Box
    as="input"
    {...props}
    css={{
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      height: '2rem',
      margin: 0,
      padding: 'm',
      border: 'thin',
      borderColor: 'primary',
      borderRadius: 'base',
      fontFamily: 'body',
      fontSize: 'm',
      color: 'text',
      backgroundColor: 'background',
      boxShadow: 'none',
      _focus: {
        // TODO: Doesn't pick it up from theme.borders
        outline: 'focus',
        outlineColor: 'accent',
        outlineOffset: 2
      },
      _disabled: {
        opacity: 0.6,
        filter: 'saturate(60%)'
      }
    }}
  />
);
