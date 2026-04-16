function parseValue(value) {
  if (typeof value === "number") return { num: value, suffix: "" };

  const match = value.match(/([\d.]+)/);
  const num = match ? parseFloat(match[0]) : 0;
  const suffix = value.replace(match[0], "");

  let multiplier = 1;

  if (suffix.includes("K")) multiplier = 1;
  if (suffix.includes("M")) multiplier = 1;

  return { num: num * multiplier, suffix };
}
export default parseValue;