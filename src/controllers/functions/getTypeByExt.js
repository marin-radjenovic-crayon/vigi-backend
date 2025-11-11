module.exports = mime => {
  // const groups = {
  //   "audios": ["mp3", "wav", "ogg"],
  //   "videos": ["mp4", "webm", "mov"],
  //   "images": ["jpeg", "jpg", "png", "gif"]
  // };

  const exploded = mime.split('/');

  return exploded[0] || 'other';

  // if(groups.audios.indexOf(ext) > -1) {
  //   return "audio"
  // }
  //
  // if(groups.images.indexOf(ext) > -1) {
  //   return "image"
  // }
  //
  // if(groups.videos.indexOf(ext) > -1) {
  //   return "video"
  // }
  //
  // return "other";
};
