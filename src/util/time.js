/** @format */

export const timeAgo = (timestamp) => {
  const now = Date.now();
  const secondsPast = (now - timestamp * 1000) / 1000; // Convert to seconds

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)} seconds ago`;
  } else if (secondsPast < 3600) {
    return `${Math.round(secondsPast / 60)} minutes ago`;
  } else if (secondsPast < 86400) {
    return `${Math.round(secondsPast / 3600)} hours ago`;
  } else if (secondsPast < 2592000) {
    return `${Math.round(secondsPast / 86400)} days ago`;
  } else if (secondsPast < 31104000) {
    return `${Math.round(secondsPast / 2592000)} months ago`;
  } else {
    return `${Math.round(secondsPast / 31104000)} years ago`;
  }
};
