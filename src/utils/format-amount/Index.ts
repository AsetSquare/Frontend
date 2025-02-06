export function formatAmount(amount: number) {
  // Convert the number to a string
  const amountStr = amount.toString();

  // Split the string into integer and decimal parts (if any)
  const parts = amountStr.split(".");

  // Add commas to the integer part
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Join the integer and decimal parts (if any) back together
  return parts.join(".");
}
