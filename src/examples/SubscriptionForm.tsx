import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

// TODO: Flex -> Stack
// TODO: Make it responsive

export function SubscriptionForm() {
  return (
    <Flex as="form">
      <Box flexGrow={1}>
        <Input
          type="email"
          value=""
          required
          placeholder="Email"
          aria-label="Email"
        />
      </Box>
      <Box pl="s">
        <Button type="submit" variant="primary">
          Subscribe
        </Button>
      </Box>
    </Flex>
  );
}
