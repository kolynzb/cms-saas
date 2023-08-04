// https://chat.vercel.ai/
// https://github.dev/vercel-labs/ai-chatbot
import React from "react";
import { nanoid } from "@utils";
import { Chat } from "@components/AIChat/chat";

// export const runtime = 'edge'

const Page = () => {
  const id = nanoid();

  return <Chat id={id} />;
};

export default Page;
