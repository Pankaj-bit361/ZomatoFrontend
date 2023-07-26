import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Avatar, Flex, Box, Textarea, Button, Text } from "@chakra-ui/react";

const init = {
  role: "system",
  content: "I am Food Expert from Zusty Zomato",
};

export const Chatbot = () => {
  const inputRef = useRef(null);
  const [input, setinput] = useState("");
  const [bot, setbot] = useState([init]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const message = { role: "user", content: input };
    const newdata = [...bot, message];

    setbot(newdata);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: newdata,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
        }
      );

      const chatbotMessage = response.data.choices[0].message.content;
      const updatedChatHistory = [
        ...newdata,
        { role: "assistant", content: chatbotMessage },
      ];

      setbot(updatedChatHistory);
      setinput("");
      inputRef.current.focus();
    } catch (error) {
      // console.error(error);
    }
  };
  
  return (
    <Box mb={10}>
      <Flex className="chat">
        <Flex alignItems="center" className="avatar" />
      </Flex>
      <Box className="messages" mt={2}>
        <Box className="messages-content">
          {bot.map((message, index) => (
            <Box key={index}>
              <Box
                bg={message.role === "user" ? "teal.400" : "#90A4AE"}
                color="white"
                p={3}
                rounded="md"
                mt={2}
                textAlign={message.role === "user" ? "left" : "right"}
              >
                <Text fontSize="base">{message.content}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <form onSubmit={handlesubmit}>
        <Flex className="mt-24" alignItems="center" justifyContent="center">
          <Textarea
            style={{ width: "90%" }}
            mt={40}
            flex={1}
            h={12}
            py={2}
            px={3}
            color="black"
            borderWidth={2}
            borderColor="gray.300"
            borderRadius="lg"
            mr={2}
            _focus={{ borderColor: "blue.400", outline: "none" }}
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setinput(e.target.value)}
            ref={inputRef}
          />
          <Box w={20} mt={40}>
            <Button
              type="submit"
              w="full"
              py={2}
              px={4}
              bg="black"
              color="white"
              borderRadius="lg"
              textAlign="center"
              _hover={{ bg: "gray.800" }}
              _focus={{ outline: "none" }}
            >
              Send
            </Button>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};
