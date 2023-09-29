import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "My App" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Container maxW={"5xl"}>
        <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
            My Hobi{" "}
            <Text as={"span"} color={"orange.400"}>
              adalah tidur
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ab quasi reprehenderit vel, placeat ducimus maiores velit eius eos, autem odit libero repellat, debitis corrupti ea pariatur quis sapiente magni?
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Link to={"signup"}>
              <Button rounded={"full"} px={6} colorScheme={"orange"} bg={"orange.400"} _hover={{ bg: "orange.500" }}>
                Register
              </Button>
            </Link>
            <Link to={"login"}>
              <Button rounded={"full"} px={6}>
                Login
              </Button>
            </Link>
          </Stack>
          <Text fontSize={"xl"}>Eannoy ❤ 2023</Text>
        </Stack>
      </Container>
    </>
  );
}
