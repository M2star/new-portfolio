import { useEffect, useRef, useState } from "react";

const RustleEffect = ({ text }: { text: string }) => {
  const [outputText, setOutputText] = useState<string[]>([]);
  

  return (
    <span className="whitespace-pre">
      {outputText.join("")}
    </span>
  );
};

export default RustleEffect;
