import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Stack } from '../components/Stack';

export function SubscriptionForm() {
  return (
    <Stack
      as="form"
      direction={{ base: 'column', tablet: 'row' }}
      gap="s"
    >
      <Box flexGrow={1}>
        <Input
          type="email"
          value=""
          required
          placeholder="Email"
          aria-label="Email"
        />
      </Box>
      <Box>
        <Button type="submit" variant="primary">
          Subscribe
        </Button>
      </Box>
    </Stack>
  );
}
