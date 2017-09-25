// Create controller 'busController'
app.controller('busController', function ($scope, $http) {
	// Call Dublin Bus API service delivering 5 results in JSON format.
    $http.get("https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopid=184&maxresults=5&format=json").then(function (response) {

        $scope.busData = response.data;

        // Create array to hold busses from nested JSON array.
        $scope.busses = [];

        // Iterate over the busses and add to array we created above.
        angular.forEach(response.data.results, function (bus, index) {
            bus.arrivingSoon = bus.duetime < 10 ? true : false; // Create helper property to help us figure out whether or not busses are arriving soon.
            $scope.busses.push(bus);
        });
    });

    // Helper function - Return the appropriate class depending on length of time until bus arrives
    $scope.setDueTimeColour = function (bus) {
        if (bus.duetime < 2) {
            return "red";
        } else if (bus.duetime < 10) {
            return "orange";
        } else if (bus.duetime > 10) {
            return "green";
        } else if (bus.duetime === "Due") {
            return "blue";
        };
    };
});