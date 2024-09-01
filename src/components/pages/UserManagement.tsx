import { FC, memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";
import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

export const UserManagement: FC = memo(() => {
  return (
    <>
      <HeaderLayout children />
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}>
            <Stack textAlign="center">
              <Image boxSize="160px" borderRadius="full" src="https://picsum.photos/800" alt="プロフィール画像" m="auto" />
              <Text fontSize="lg" fontWeight="bold">
                トーマス
              </Text>
              <Text fontSize="sm" color="gray">
                Toita Masafumi
              </Text>
            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
});
