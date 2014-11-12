'use strict';

app.factory('UserResponse', [function () {

  var response = [];

  response.addEntry = function (data) {
    response.push(data);
  };

  return response;
}]);