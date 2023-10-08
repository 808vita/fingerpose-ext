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

### Include "handpose" (newer version),"fingerpose" and this library

```js
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import "@tensorflow/tfjs-backend-webgl";
import * as fp from "fingerpose";
import createLandmarks from "fingerpose-ext";
```

### Use "handpose" to estimate the landmarks

```js
const model = await handpose.load();
const predictions = await model.estimateHands(video, true);
```

### Estimate the gestures

```js
let landmarks = createLandmarks(prediction[0]);
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
