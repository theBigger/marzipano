/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

function CanvasHackVideoElementWrapper(videoElement) {
  this._videoElement = videoElement;
  this._drawElement = document.createElement('canvas');
}

CanvasHackVideoElementWrapper.prototype.videoElement = function() {
  return this._videoElement;
};

CanvasHackVideoElementWrapper.prototype.drawElement = function() {
  this._drawElement.width = this._videoElement.videoWidth;
  this._drawElement.height = this._videoElement.videoHeight;
  this._drawElement.getContext("2d").drawImage(this._videoElement, 0, 0);
  return this._drawElement;
};

CanvasHackVideoElementWrapper.prototype.destroy = function() {
  this._videoElement.pause();
  this._videoElement.volume = 0;
  this._videoElement.removeAttribute('src');
};