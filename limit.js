/**
 * Created by Jen on 10/28/2014.
 */
$(document).ready(function() {

        var submit = $('button');
        var maxChars = 300;
        var inputBox = $('#usertext')//.val();
        var count =$('#count');
        var msg = $('#msg');
        var board = [];

        inputBox.on('keyup', checkAndUpdateCount);
        //registering event

        checkAndUpdateCount();

        submit.on('click',transmogrify);
            console.log('yay');
            //it printed yay before i clicked.

        $('.container').append([board]);

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


    function transmogrify(inputBox){
            var input = [];
            inputs = $('#usertext').val();
            input = inputs.trim().split[" "];
            var words = _.shuffle(input);
            // _.each(words, sampleWords);

            //var board = [];

            board = _.sample(words,[33]);

            return board;
    }

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

