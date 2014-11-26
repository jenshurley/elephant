/**
* Created by Jen on 10/31/2014.
*/

function transmogrify(inputBox){
    var limit = [];
    var letters = inputBox.val().trim().split[" "];
    //  Uncaught TypeError: undefined is not a function
    var board = [];

    board = _.sample(letters,[33]);

    limit =  _.shuffle(board);

    return limit;

    //  msg.text(transmogrify(inputBox));

}
