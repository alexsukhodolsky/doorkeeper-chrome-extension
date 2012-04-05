/*
 * Copyright 2011 Google Inc. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var doorkeeper = new OAuth2('doorkeeper', {
  client_id: '9ce470b894e2c5ac9e4f7b824e104f0bf4b1fbb69d24ba5920e6597fc8736f4c',
  client_secret: '0ffcf039cf5fe3aadc84c4d901d9e715b21be5f15d4bccebc4f408c9cf045a2e',
  api_scope: 'public'
});

doorkeeper.authorize(function() {

	var API_URL = "http://doorkeeper-provider.herokuapp.com/api/v1/";

  if(doorkeeper.getAccessToken())
    $('#display-token').text(doorkeeper.getAccessToken());
	
	$('.btn').click(function() {
		callApi($(this).attr('id'));
	});

  function callApi(action) {
    // Make an XHR that creates the task
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(event) {
      if (xhr.readyState == 4) {
        if(xhr.status == 200) {
          // Great success: parse response with JSON
          $('#message').text(xhr.response);

        } else {
          // Request failure: something bad happened
          $('#message').text('Error. Status returned: ' + xhr.status);
        }
      }
    };

    xhr.open('GET', API_URL + action, true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + doorkeeper.getAccessToken());
    xhr.send();
  }

});

