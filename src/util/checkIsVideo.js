export function isVideo(url) {
  const videoExtensions = [
    ".mp4",
    ".mov",
    ".webm",
    ".avi",
    ".mkv",
    ".flv",
    ".wmv",
  ];

  const lowercaseUrl = url.toLowerCase();
  return videoExtensions.some((ext) => lowercaseUrl?.endsWith(ext));
}
