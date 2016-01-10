var activitiesManager = angular.module('activitiesManager', []);

function mainController($scope, $http) {

    var refresh = function (){
        $http.get('/api/activities')
            .success(function(data) {
                $scope.activities = data;
                $scope.formActivity = {};
                console.log("activities: ", data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    refresh();

    $scope.createActivity = function() {
        $http.post('/api/activities', $scope.formActivity)
            .success(function(data) {
                $scope.formActivity = {};
                $scope.activities = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deleteActivity = function(id) {
        $http.delete('/api/activities/' + id)
            .success(function(data) {
                $scope.activities = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.editActivity = function(id) {
        $http.get('/api/activities/' + id)
            .success(function(data) {
                $scope.formActivity = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.updateActivity = function() {
        $http.put('/api/activities/' + $scope.formActivity._id, $scope.formActivity)
        .success( function(response){
            refresh();
        });
    };

}
