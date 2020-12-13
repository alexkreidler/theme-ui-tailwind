import React from "react";
import { Box, Card, Image, Heading, Text } from "theme-ui";

interface IImageCardProps {
  image: string;
  title: string;
  description: string;
}

export const ImageCard: React.FC<IImageCardProps> = ({
  image,
  title,
  description,
}: IImageCardProps) => (
  <Box sx={{ width: 256 }}>
    <Card
      sx={{
        p: 4,
        borderRadius: 4,
        boxShadow: "md",
      }}
    >
      <Image variant="avatar" src={image} />
      <Box>
        <Heading as="h3" sx={{ fontWeight: "900" }}>
          {title}
        </Heading>
        <Text sx={{ fontSize: 0 }}>{description}</Text>
      </Box>
    </Card>
  </Box>
);
