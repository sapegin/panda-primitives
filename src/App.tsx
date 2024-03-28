import { useState } from 'react';
import { SubscriptionForm } from './examples/SubscriptionForm';
import { Heading } from './components/Heading';
import { Stack } from './components/Stack';
import { Button } from './components/Button';
import { Link } from './components/Link';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack gap="l" p="m">
      <Heading level={1}>🐼 Panda primitives</Heading>
      <Stack as="section" gap="m">
        <Heading level={2}>Some examples</Heading>
        <SubscriptionForm />
      </Stack>
      <Stack as="section" gap="m">
        <Heading level={2}>Some more stuff</Heading>
        <Button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Made with{' '}
          <Link href="https://panda-css.com/">Panda CSS</Link>
        </p>
      </Stack>
    </Stack>
  );
}
