/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};

app.initialize();

/** Patch for the Fetch API not working with file:/// */
		"use strict";

		function androidFetchWorkaround() {
			var a = window.fetch;

			a !== void 0 && (window.fetch = function() {
				for (var c = arguments.length, b = Array(c), d = 0; d < c; d++) {
					b[d] = arguments[d];
				}

				var e = b[0];
				return "string" == typeof e && e.match(/\.svg/) ? new Promise(function(f, g) {
					var h = new XMLHttpRequest;

					h.open("GET", e, !0), h.addEventListener("load", function() {
						f({
							ok: !0, text: function text() {
								return Promise.resolve(h.responseText);
							}
						});
					}), h.addEventListener("error", g), h.send();
				}) : a.apply(void 0, b);
			});
		}

		androidFetchWorkaround();