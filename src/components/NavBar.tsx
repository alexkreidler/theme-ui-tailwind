import React from "react";
import { Box, Container, Flex, Image, Link, NavLink } from "theme-ui";

const items = ["Home", "Blog", "About"];

export const NavBar: React.FC<unknown> = () => (
  <Container>
    <Flex as="nav">
      <Box sx={{ flexGrow: 1 }}>
        <Link href="/" mr={2}>
          <span sx={{ display: "none" }}>Workflow</span>
          <Image
            sx={{
              width: 10,
            }}
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          />
        </Link>
      </Box>
      <Box>
        {items.map((nv) => (
          <NavLink href="#!" p={2}>
            {nv}
          </NavLink>
        ))}
      </Box>
    </Flex>
  </Container>
);
