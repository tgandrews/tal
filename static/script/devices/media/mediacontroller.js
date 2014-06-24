/**
 * @fileOverview Requirejs module containing CE-HTML media wrapper
 *
 * @preserve Copyright (c) 2013 British Broadcasting Corporation
 * (http://www.bbc.co.uk) and TAL Contributors (1)
 *
 * (1) TAL Contributors are listed in the AUTHORS file and at
 *     https://github.com/fmtvp/TAL/AUTHORS - please extend this file,
 *     not this notice.
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * All rights reserved
 * Please contact us for an alternative licence
 */

require.def(
    'antie/devices/media/mediacontroller',
    [
        'antie/class',
        'antie/devices/device',
        'antie/events/mediaevent',
        'antie/events/mediaerrorevent',
        'antie/events/mediasourceerrorevent',
        'antie/mediasource',
        'antie/devices/media/seekstate'
    ],

    function(Class, Device, MediaEvent, MediaErrorEvent, MediaSourceErrorEvent, MediaSource, SeekState ) {

        var Controller = Class.extend({
            init: function(id, mediaType, eventHandlingFunction) {
            },
            render: function(device) {
                throw new Error("Should be overridden in subclasses");
            },
            setWindow: function(left, top, width, height) {
                throw new Error("Should be overridden in subclasses");
            },
            getError: function() {
                throw new Error("Should be overridden in subclasses");
            },
            setSources: function(sources, tags) {
                throw new Error("Should be overridden in subclasses");
            },
            getSources: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getCurrentSource: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getNetworkState: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getPreload: function() {
                throw new Error("Should be overridden in subclasses");
            },
            setPreload: function(preload) {
                throw new Error("Should be overridden in subclasses");
            },
            getBuffered: function() {
                throw new Error("Should be overridden in subclasses");
            },
            load: function() {
                throw new Error("Should be overridden in subclasses");
            },
            canPlayType: function(type) {
                throw new Error("Should be overridden in subclasses");
            },
            getReadyState: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getSeeking: function() {
            },
            setCurrentTime: function(currentTime) {
                throw new Error("Should be overridden in subclasses");
            },
            getCurrentTime: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getInitialTime: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getDuration: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getStartOffsetTime: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getPaused: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getDefaultPlaybackRate: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getPlaybackRate: function() {
                throw new Error("Should be overridden in subclasses");
            },
            setPlaybackRate: function(playbackRate) {
                throw new Error("Should be overridden in subclasses");
            },
            getPlayed: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getSeekable: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getEnded: function() {
                throw new Error("Should be overridden in subclasses");
            },
            getAutoPlay: function() {
                throw new Error("Should be overridden in subclasses");
            },
            setAutoPlay: function(autoplay) {
                throw new Error("Should be overridden in subclasses");
            },
            getLoop: function() {
                throw new Error("Should be overridden in subclasses");
            },
            setLoop: function(loop) {
                throw new Error("Should be overridden in subclasses");
            },
            play: function() {
                throw new Error("Should be overridden in subclasses");
            },
            stop: function() {
                throw new Error("Should be overridden in subclasses");
            },
            pause: function() {
                throw new Error("Should be overridden in subclasses");
            },
            setNativeControls: function(controls) {
                throw new Error("Should be overridden in subclasses");
            },
            getNativeControls: function() {
                throw new Error("Should be overridden in subclasses");
            },
            destroy: function() {
            }

        });

        Controller.EMBED_MODE_EXTERNAL = 0;
        Controller.EMBED_MODE_BACKGROUND = 1;
        Controller.EMBED_MODE_EMBEDDED = 2;

        Controller.NETWORK_EMPTY = 0;
        Controller.NETWORK_IDLE = 1;
        Controller.NETWORK_LOADING = 2;
        Controller.NETWORK_NO_SOURCE = 3;

        Controller.HAVE_NOTHING = 0;
        Controller.HAVE_METADATA = 1;
        Controller.HAVE_CURRENT_DATA = 2;
        Controller.HAVE_FUTURE_DATA = 3;
        Controller.HAVE_ENOUGH_DATA = 4;

        Controller.MEDIA_ERR_UNKNOWN = 0;
        Controller.MEDIA_ERR_ABORTED = 1;
        Controller.MEDIA_ERR_NETWORK = 2;
        Controller.MEDIA_ERR_DECODE = 3;
        Controller.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
        
        return Controller;

    }
);
