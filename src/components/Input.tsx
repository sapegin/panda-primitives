import { type InputHTMLAttributes } from 'react';
import { Box } from './Box';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
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
