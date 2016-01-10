var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Activity = mongoose.model('Activity');

router.get('/api/activities', function(req, res) {
    Activity.find(function(err, activities) {
        if (err){
            res.send(err);
        }
        res.json(activities);
    });
});

router.post('/api/activities', function(req, res) {
    Activity.create({
        summary : req.body.summary,
        description : req.body.description,
        time : req.body.time,
        done : false
    }, function(err, activity) {
        if (err){
            res.send(err);
        }
        Activity.find(function(err, activities) {
            if (err){
                res.send(err);
            }
            res.json(activities);
        });
    });

});

router.delete('/api/activities/:activity_id', function(req, res) {
    Activity.remove({
        _id : req.params.activity_id
    }, function(err, activity) {
        if (err){
            res.send(err);
        }
        Activity.find(function(err, activities) {
            if (err){
                res.send(err);
            }
            res.json(activities);
        });
    });
});

router.get('/api/activities/:activity_id', function(req, res) {
    Activity.findOne({
        _id : req.params.activity_id
    }, function(err, activity) {
        if (err){
          res.send(err);
        }
        res.json(activity);
    });
});

router.put('/api/activities/:activity_id', function(req, res) {
    var activityData = req.body;
    var id = req.params.activity_id;

    Activity.update(
        {_id: id },
        activityData,
        { upsert: true},
        function(err, activity) {
            if (err) {
              res.send(err);
            }
            res.json(activity);
    });

});

router.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

module.exports = router;
