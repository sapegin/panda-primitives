import { Box } from './Box';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link(props: LinkProps) {
  return (
    <Box
      as="a"
      css={{
        padding: 0,
        background: 'none',
        border: 0,
        font: 'inherit',
        textDecoration: 'underline',
        color: 'primary',
        _hover: {
          color: 'accent',
          cursor: 'pointer'
        },
        _focusVisible: {
          outline: 'focus',
          outlineOffset: 2
        }
      }}
      {...props}
    />
  );
}
