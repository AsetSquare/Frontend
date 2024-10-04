export function formatDateTime(dateTimeString: string): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateTimeString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const meridiem = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const month = months[date.getMonth()];
  const day = date.getDate();
  const ordinal = getOrdinalSuffix(day);
  const year = date.getFullYear();

  return `${formattedHours}:${formattedMinutes}${meridiem} ${month} ${day}${ordinal}, ${year}`;
}

function getOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Define options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  // Format the date string using toLocaleDateString
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
