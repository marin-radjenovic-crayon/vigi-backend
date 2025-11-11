function distributeVideos(timeline, videos) {
  const deVideos = videos.filter(video => video.lng === 'de');
  const enVideos = videos.filter(video => video.lng === 'en');

  // Pair de and en videos
  let pairedVideos = [];
  let i = 0;
  while (i < deVideos.length && i < enVideos.length) {
    pairedVideos.push(deVideos[i], enVideos[i]);
    i++;
  }

  // Add remaining videos from one language
  let remainingVideos = [];
  while (i < deVideos.length) {
    remainingVideos.push(deVideos[i++]);
  }
  while (i < enVideos.length) {
    remainingVideos.push(enVideos[i++]);
  }

  const totalSlots = timeline.length - 2;
  const totalVideos = Math.ceil(pairedVideos.length / 2) + remainingVideos.length;
  const step = totalSlots / totalVideos;

  let result = [...timeline];
  let positions = Array.from({ length: totalVideos }, (_, idx) => Math.round(1 + idx * step));

  // Insert paired videos at calculated intervals
  for (let j = 0; j < pairedVideos.length; j += 2) {
    const pos = positions.shift();
    result.splice(pos, 0, pairedVideos[j]);
    if (pairedVideos[j + 1]) {
      result.splice(pos + 1, 0, pairedVideos[j + 1]);
    }
    positions = positions.map(p => p + 1);
  }

  // Distribute remaining videos equally
  for (let j = 0; j < remainingVideos.length; j++) {
    const pos = positions.shift();
    result.splice(pos, 0, remainingVideos[j]);
    positions = positions.map(p => p + 1);
  }

  return result;
}

module.exports = {
  distributeVideos
}
