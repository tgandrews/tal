/**
 * @fileOverview Requirejs module containing the antie.widgets.Media class.
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

require.def('antie/widgets/media',
	[
		'antie/widgets/widget',
        'antie/application',

		// Include these so they're packaged with this file
		// All subclasses (which will be dynamically loaded) should use these
		'antie/events/mediaerrorevent',
		'antie/events/mediasourceerrorevent'
	],
	function(Widget, Application) {
		/**
		 * The Media widget is responsible for playing video and audio within an application.
		 * It must be subclassed to provide support for different playback APIs.
		 * Methods and events loosely match that of the HTML5 HTMLMediaElement:
		 * @name antie.widgets.Media
		 * @class
		 * @abstract
		 * @extends antie.widgets.Widget
		 * @requires antie.events.MediaErrorEvent
		 * @requires antie.events.MediaSourceErrorEvent
		 * @param {String} [id] The unique ID of the widget. If excluded, a temporary internal ID will be used (but not included in any output).
		 */
		var Media = Widget.extend(/** @lends antie.widgets.Media.prototype */ {
			/**
			 * @constructor
			 * @ignore
			 */
			init: function(id, mediaType) {
				this._super(id);

				this.addClass('media');

                var self = this;
                var eventCallback = function (event) {
                    self.bubbleEvent(event);
                };

                this._media = Application.getCurrentApplication().getDevice().createMediaController(id, mediaType, eventCallback);


			},
			// (not part of HTML5 media)
			setWindow: function(left, top, width, height) {
                return this._media.setWindow(left,top,width,height);
			},
			getVideoWidth: function() {
                return this._media.getVideoWidth();
			},
			getVideoHeight: function() {
                return this._media.getVideoHeight();
			},
			// readonly attribute MediaError error;
			getError: function() {
                return this._media.getError();
			},
			// Similar to src attribute or 'source' child elements:
			// attribute DOMString src;
			setSources: function(sources, tags) {
                return this._media.setSources(sources, tags);
			},
			getSources: function() {
                return this._media.getSources();
			},
			// readonly attribute DOMString currentSrc;
			getCurrentSource: function() {
                return this._media.getCurrentSources();
			},
			getNetworkState: function() {
                return this._media.getNetworkState();
			},
			// attribute DOMString preload;
			getPreload: function() {
                return this._media.getPreload();
			},
			setPreload: function(preload) {
                return this._media.setPreload(preload);
			},
			// readonly attribute TimeRanges buffered;
			getBuffered: function() {
                return this._media.getBuffered();
			},
			// void load();
			load: function() {
                return this._media.load();
			},
			// DOMString canPlayType(in DOMString type);
			canPlayType: function(type) {
                return this._media.canPlayType(type);
			},
			getReadyState: function() {
                return this._media.getReadyState();
			},
			// readonly attribute boolean seeking;
			getSeeking: function() {
                return this._media.getSeeking();
			},
			// attribute double currentTime;
			setCurrentTime: function(currentTime) {
                return this._media.setCurrentTime(currentTime);
			},
			getCurrentTime: function() {
                return this._media.getCurrentTime();
			},
			// readonly attribute double initialTime;
			getInitialTime: function() {
                return this._media.getInitialTime();
			},
			// readonly attribute double duration;
			getDuration: function() {
                return this._media.getDuration();
			},
			// readonly attribute Date startOffsetTime;
			getStartOffsetTime: function() {
                return this._media.getStartOffsetTime();
			},
			// readonly attribute boolean paused;
			getPaused: function() {
                return this._media.getPaused();
			},
			// attribute double defaultPlaybackRate;
			getDefaultPlaybackRate: function() {
                return this._media.getDefaultPlaybackRate();
			},
			// attribute double playbackRate;
			getPlaybackRate: function() {
                return this._media.getPlaybackRate();
			},
			setPlaybackRate: function(playbackRate) {
                return this._media.setPlaybackRate(playbackRate);
			},
			// readonly attribute TimeRanges played;
			getPlayed: function() {
                return this._media.getPlayed();
			},
			// readonly attribute TimeRanges seekable;
			getSeekable: function() {
                return this._media.getSeekable();
			},
			// readonly attribute boolean ended;
			getEnded: function() {
                return this._media.getEnded();
			},
			// attribute boolean autoplay;
			getAutoPlay: function() {
                return this._media.getAutoPlay();
			},
			setAutoPlay: function(autoplay) {
                return this._media.setAutoPlay(autoplay);
			},
			// attribute boolean loop;
			getLoop: function() {
                return this._media.getLoop();
			},
			setLoop: function(loop) {
                return this._media.setLoop(loop);
			},
			// void play();
			play: function() {
                return this._media.play();
			},
			// NOT IN HTML5 but needed by many devices
			stop: function() {
                return this._media.stop();
			},
			// void pause();
			pause: function() {
                return this._media.pause();
			},
			// attribute boolean controls;
			setNativeControls: function(controls) {
                return this._media.setNativeControls(controls);
			},
			getNativeControls: function() {
                return this._media.getNativeControls();
			},
			// attribute double volume;
			setVolume: function(volume) {
                return this._media.setVolume(volume);
			},
			getVolume: function() {
                return this._media.getVolume();
			},
			// attribute boolean muted;
			setMuted: function(muted) {
                return this._media.setMuted(muted);
			},
			getMuted: function() {
                return this._media.getMuted();
			},
			destroy: function() {
                return this._media.destroy();
			}
		});

        // FIXME - MAKE THESE VALUES COME FROM mediacontroller.WHATEVER FOR CONSISTENCY IN VALUES.
		Media.EMBED_MODE_EXTERNAL = 0;
		Media.EMBED_MODE_BACKGROUND = 1;
		Media.EMBED_MODE_EMBEDDED = 2;

		Media.NETWORK_EMPTY = 0;
		Media.NETWORK_IDLE = 1;
		Media.NETWORK_LOADING = 2;
		Media.NETWORK_NO_SOURCE = 3;

		Media.HAVE_NOTHING = 0;
		Media.HAVE_METADATA = 1;
		Media.HAVE_CURRENT_DATA = 2;
		Media.HAVE_FUTURE_DATA = 3;
		Media.HAVE_ENOUGH_DATA = 4;

		Media.MEDIA_ERR_UNKNOWN = 0;
		Media.MEDIA_ERR_ABORTED = 1;
		Media.MEDIA_ERR_NETWORK = 2;
		Media.MEDIA_ERR_DECODE = 3;
		Media.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;

		return Media;
	}
);
