export default function postedAt(date) {
  const dateNow = new Date();
  const datePosted = new Date(date);
  const dateDifferent = dateNow - datePosted;
  const dateDifferentInDays = Math.floor(dateDifferent / (1000 * 3600 * 24));
  const dateDifferentInHours = Math.floor(dateDifferent / (1000 * 3600));
  const dateDifferentInMinutes = Math.floor(dateDifferent / (1000 * 60));
  const dateDifferentInSeconds = Math.floor(dateDifferent / 1000);

  if (dateDifferentInDays > 0) {
    return `${dateDifferentInDays} hari yang lalu`;
  } else if (dateDifferentInHours > 0) {
    return `${dateDifferentInHours} jam yang lalu`;
  } else if (dateDifferentInMinutes > 0) {
    return `${dateDifferentInMinutes} menit yang lalu`;
  } else if (dateDifferentInSeconds > 0) {
    return `${dateDifferentInSeconds} detik yang lalu`;
  } else {
    return "baru saja";
  }
}
