var friends=require("../data/friends");


module.exports = function(app) {

    // Get all friends
    app.get("/api/friends", function(req, res) {
  
     res.json(friends);
  
    });

    // Add a friend
    app.post("/api/friends", function(req, res) {
      
     var totalDifference=0;
     var bestMatch= {
       name: "",
       photo: "",
       friendDifference: Infinity
     };

     var userData= req.body;
     var userName= userData.name;
     var userScores= userData.scores;


     var num= userScores.map(function(item){
       return parseInt(item, 10);
     });

     userData= {
       name: req.body.name,
       photo: req.body.photo,
       scores: num
     };

     var sum= num.reduce((a,b) => a+b, 0);

     console.log("best match friend difference ", bestMatch.friendDifference);

     for(var i = 0; i < friends.length; i++){
       console.log(friends[i].name);
       totalDifference=0;
       console.log("total difference: ", totalDifference);
       console.log("best match friend difference 2 ", bestMatch.friendDifference);


       var match= friends[i].scores.reduce((a,b) => a+b, 0);

       totalDifference += Math.abs(sum-match);

       console.log("td: ", totalDifference);

       for (var i = 0; i < friends.length; i++) {
         console.log(friends[i].name);
         totalDifference=0;
         console.log("total diff: ", totalDifference);
         console.log("best match friend diff: ", bestMatch.friendDifference);

         var bfriendScore= friends[i].scores.reduce((a,b) => a+b, 0);
         

         totalDifference += Math.abs(sum-bfriendScore);

         if(totalDifference <= bestMatch.friendDifference){

          bestMatch.name= friends[i].name;
          bestMatch.photo= friends[i].photo;
          bestMatch.friendDifference= totalDifference;
         }
         console.log("total diff: ", totalDifference);
       }

       console.log(bestMatch);
       friends.push(userData);

      //  console.log(friends);

       console.log("new friend added");
       console.log(userData);
       res.json(bestMatch);

     }

    })
  };