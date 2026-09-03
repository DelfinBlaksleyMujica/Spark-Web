export const flattenAnswer = (answer) => {
  if (typeof answer === "string") {
    return answer;
  }

  return answer
    .map((line) =>
      line.map((part) => (typeof part === "string" ? part : part.bold)).join("")
    )
    .join(" ");
};
