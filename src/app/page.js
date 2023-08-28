"use client";

import { runningPlans } from "@/libs/runningPlans";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Modal,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Container size="xs">
      <Title italic color="pink">
        Register CMU Marathon
      </Title>

      <Group grow>
        <TextInput label="First Name" required></TextInput>
        <TextInput label="Last Name" required></TextInput>
        <TextInput label="Email" required type="email"></TextInput>
      </Group>
      <Select
        data={runningPlans}
        label="Plan"
        placeholder="Select a plan.."
        required
        searchable
      ></Select>
      <Group>
        <Checkbox></Checkbox>
        <Text>
          I accept <Anchor onClick={open}>terms and conditions</Anchor>{" "}
        </Text>
      </Group>
      <Button>Register</Button>

      <Modal opened={opened} onClose={close} title="Terms and conditions">
        <Text>
          1. whatttttt <br />
          2. whatttttt <br />
          3. whatttttt <br />
        </Text>
        <Button onClick={close}>Confirm</Button>
      </Modal>
    </Container>
  );
}
