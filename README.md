# fingerpose-ext

This package provides utility function to create "landmark" array from keypoints & keypoints3D arrays.

fingerpose & fingerpose-gestures npm packages both requires "landmarks" array to detect the gestures.
The newer improved version of hand pose "@tensorflow-models/hand-pose-detection": "^2.0.1" returns "keypoints" and "keypoints3D" instead of "landmarks".

## Installation

Install the module via NPM:

```sh
npm i fingerpose-ext
```

Install the module via yarn:

```sh
yarn add fingerpose-ext
```

## Usage

### Include "handpose" (newer version), "tfjsWasm","fingerpose",etc. and this library

```js
import * as fp from "fingerpose";
import createLandmarks from "fingerpose-ext";
```

### Use "handpose" to estimate the landmarks

```js
const model = handPoseDetection.SupportedModels.MediaPipeHands;
const detectorConfig = {
  runtime: "mediapipe", // or 'tfjs',
  solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/hands",
  modelType: "full",
};
const detector = await handPoseDetection.createDetector(model, detectorConfig);

const hands = await detector.estimateHands(image);
```

### Example output

```json
[
  {
    score: 0.8,
    handedness: ‘Right’,
    keypoints: [
      {x: 105, y: 107, name: "wrist"},
      {x: 108, y: 160, name: "pinky_finger_tip"},
      ...
    ],
    keypoints3D: [
      {x: 0.00388, y: -0.0205, z: 0.0217, name: "wrist"},
      {x: -0.025138, y: -0.0255, z: -0.0051, name: "pinky_finger_tip"},
      ...
    ]
  }
]
```

### Estimate the gestures

```js
let landmarks = createLandmarks(hands[0]);
const estimatedGestures = GE.estimate(landmarks, 8.5);
```

The result is an object containing possible gestures and their confidence, for example:

```json
{
    "poseData": [ ... ],
    "gestures": [
        { "name": "thumbs_up", "confidence": 9.25 },
        { ... }
    ]
}
```
