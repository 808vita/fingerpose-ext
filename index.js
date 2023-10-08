function createLandmarks(prediction) {
  let keypoints = prediction.keypoints;
  let keypoints3D = prediction.keypoints3D;
  let landmarks = [];

  for (let i = 0; i < keypoints.length; i++) {
    let currentList = [keypoints[i].x, keypoints[i].y, keypoints3D[i].z];
    landmarks.push(currentList);
  }
  return landmarks;
}

module.exports = createLandmarks;
