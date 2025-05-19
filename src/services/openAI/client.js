import OpenAI from "openai";

// const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;

// const openAiClient = new OpenAI({
//   apiKey: OPEN_AI_API_KEY,
// });

const getOpenAiData = async ({ instructions, input }) => {
  const response = "hello wurrold";
  // const response = await openAiClient.responses.create({
  //   model: "gpt-4o",
  //   instructions,
  //   input,
  // });

  return response;
};

export default getOpenAiData;
