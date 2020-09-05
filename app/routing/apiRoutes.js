var friends = require ("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      app.post("/api/friends", function(req, res) {
        var totalDifference = 0;
        var bestFriend = {
          name: "",
          photo: "",
          minimumDifference: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function(item) {
          return parseInt(item,10);
        });

        userData = {
          name: req.body.name,
          photo: req.body.photo,
          scores: b
        };

        console.log("Name:" + userName);
        console.log("User score" + userScores0);

        var sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of users score" + sum);
        console.log("Best match friend diff" + bestFriend.minimumDifference);
       
        for(var i = 0; i < friends.length; i++) {
          console.log(friends[i].name);
          totalDifference = 0;
          console.log("Total Difference" + totalDifference);
          console.log("Best friend match Difference" + bestFriend.minimumDifference);

          var bffScore = friends[i].scores.reduce((a,b) => a + b, 0);
          console.log("Total friend score" + bffScore);
          totalDifference += Math.abs(sum - bffScore);


          if (totalDifference <= bestFriend.minimumDifference) {
            bestFriend.name = friends[i].name;
            bestFriend.photo = friends[i].photo;
            bestFriend.minimumDifference = totalDifference;
          }
          console.log(totalDifference + "Total Difference");
        }

        console.log(bestFriend);
        friends.push(userData);
        console.log("New User added");
        console.log(userData);
        res.json(bestFriend);
      });
    };
  //       console.log(req.body.scores);

  // // Receive user details (name, photo, scores)
  // var user = req.body;

  // // parseInt for scores
  // for (var i = 0; i < user.scores.length; i++) {
  //   user.scores[i] = parseInt(user.scores[i]);
  // }  

  // // default friend match is the first friend but result will be whoever has the minimum difference in scores
  // var bestFriendIndex = 0;
  // var minimumDifference = 40;

  // // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
  // //  whatever the difference is, add to the total difference
  // for (var i = 0; i < friends.length; i++) {
  //   var totalDifference = 0;
  //   for (var j = 0; j < friends[i].scores.length; j++) {
  //     var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
  //     totalDifference += difference;
  //   }

  //   // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
  //    if (totalDifference < minimumDifference) {
  //       bestFriendIndex = i;
  //       minimumDifference = totalDifference;
    
  // }


  // // after finding match, add user to friend array
  // // friends.push(user);

  // // send back to browser the best friend match
  // res.json(friends[bestFriendIndex]);

  //     }
  //   });
  // }