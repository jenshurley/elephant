/**
 * Created by Jen on 10/28/2014.
 */
$(document).ready(function() {

        var submit = $('button');
        var maxChars = 500;
        var inputBox = $('#usertext');
        var count =$('#count');
        var msg = $('#msg');
        var board = [];
        var str = "";

        inputBox.on('keyup',function(){
            checkAndUpdateCount();
        });
        //registering event

        checkAndUpdateCount();

        submit.on('click',function(){
           distill();

        });
            //it printed yay before i clicked.

        //$('.container').append(board);

    function checkAndUpdateCount(event){
            var currentText = inputBox.val();
            var remaining = maxChars - currentText.length;

            if(remaining > 20){
                count.removeClass('warn');
            }else{
                count.addClass('warn');

            }
            if (remaining >= 0){
                count.text(remaining);
            }else{
                count.text(0);
                var truncate = currentText.substring(0, maxChars-1);
                inputBox.val(truncate);
            }
        }


    });


    function distill(inputBox){
            //console.log('yay');

            var input = [];
            inputs = $('textarea').val();
            console.log(inputs);
            input = inputs.split([" "],[33]);
            console.log(input);
            var words = _.shuffle(input);
            // _.each(words, sampleWords);
            console.log(words);

            var board = [];
//TODO break on fullstop
            board = _.sample(words,[33]);
            (console.log(board));
            //return board;

            var disstring = board.join(" ").toLowerCase();
            (console.log(disstring));
            //return disstring;
            $('.container').append("<p id='msg'>" + disstring + "</p>");
            console.log('what');
    }
1

//TODO add seample text (fillerama API) and choice of functions and better design

//function makeRow(record){
//    return "<tr data-id='"+ record.ts +"'>" +
//        "<td>" + record.name + "</td>" +
//        "<td>" + record.email + "</td>" +
//        "<td><button class='remove btn btn-primary btn-xs'>remove</button></td>" +
//        "</tr>";


          //  msg.text(transmogrify(inputBox));

    //function getInfo (indx, list) {
    //    var container = document.getElementById("container");
    //    var words = "<p>" +" " + elem.grade + "</p>";
    //    container.textContent = container.textContent + words;
    //});

    //            findLongestWord(board);
    //
    //    function findLongestWord(str){
    //    var longest="";
    //    //intializing and setting longest as empty string
     // var words = str.trim().split(" ");
    //    //use split command to split on a ****SPACE***! get array of words.
    //
    //    console.log(words);
    //
    //    for(var i=0; i<words.length;i++){
    //        /*as we go through each words, each time different - run n times based on string
    //         need to start adding it into this counts*/
    //        var word = words[i];
    //
    //        /*if the words.length just run through the loop is > the prev word run through,
    //         store value of that one. reassign longest*/
    //        //conditional clause here
    //        if(word.length > longest.length){
    //            longest = word;
    //
    //        }
    //    }
    //
    //
    //    return longest;
    //}

//console.log(findLongestWord("do the conversions first"));

//function transmogrify(inputBox){
//    console.log('yay');
//
//    var input = [];
//    inputs = $('textarea').val();
//    input = inputs.trim().split[" "];
//    var words = _.shuffle(input);
//    // _.each(words, sampleWords); ==>empty array
//    console.log(words);
//
//    var board = [];
//
//    board = _.sample(words,[33]);
//    (console.log(board)); ==> empty array
//    return board;
//}
