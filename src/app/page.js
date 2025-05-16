import getOpenAiData from "@/services/openAI/client";
import { css } from "../../styled-system/css";

const Home = async () => {
  const data = await getOpenAiData({
    instructions: "Generate a simple response",
    input: "Hello",
  });

  console.log("Data", data);
  return (
    <div
      className={css({
        backgroundColor: "red",
        color: "white",
      })}
    >
      Hello wurrold
      <button>Get OpenAI Data</button>
    </div>
  );
};

export default Home;
