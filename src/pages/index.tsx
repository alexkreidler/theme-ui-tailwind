import React from "react";
import Head from "next/head";
import { ImageCard } from "components/ImageCard";
import {
  Alert,
  Badge,
  Box,
  Button,
  Close,
  Container,
  Grid,
  Heading,
  Message,
} from "theme-ui";
import { NavBar } from "components/NavBar";
import { DemoForm } from "components/DemoForm";

const demos = [
  {
    name: "Image Card",
    c: (
      <ImageCard
        title="Card Demo"
        description="lorem"
        image="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048"
      />
    ),
  },
  { name: "Button", c: <Button>Hey there</Button> },
  {
    name: "Message",
    c: <Message>This is just a message for someone to read</Message>,
  },
  { name: "Navigation Bar", c: <NavBar>Hi</NavBar> },
  { name: "Demo Form", hide: true, c: <DemoForm>Hi</DemoForm> },
  {
    name: "Badge",
    c: (
      <Heading>
        Example
        <Badge variant="accent" ml={2}>
          New
        </Badge>
        <Badge variant="outline" ml={1}>
          Cool
        </Badge>
      </Heading>
    ),
  },
  {
    name: "Alert",
    c: (
      <Alert>
        Beep boop, this is an alert!
        <Close ml="auto" mr={-2} />
      </Alert>
    ),
  },
];

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Box p={4}>
      <Heading sx={{ pb: 3 }}>Demo Components</Heading>
      {demos
        .filter((d) => !d.hide)
        .map((d) => (
          <Box key={d.name} my={4}>
            <Heading as="h3" sx={{ pb: 2 }}>
              {d.name}
            </Heading>
            {d.c}
          </Box>
        ))}
      {/* <Grid gap={4} columns="1fr 1fr">
      </Grid> */}
    </Box>
  </div>
);

export default Home;
