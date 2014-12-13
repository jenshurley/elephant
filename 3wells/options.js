//TEXT SELECTIONS
//for each well, choose a different random array item (no replacement)]


$(document).ready(function() {
        //global variable of the different json arrays

    var choices = $('.btn'); //this reflects the choice of list as the buttons present them
    var cleanBtn = $('#clean');
    var makeBtn = $('#make');
    var openBtn =$('#open');

    var wells = $('.well'); //selects the bootstrap wells

    choices.on('mouseenter',function(){
        console.log('m.e.');
        $(this).removeClass('btn btn-default').addClass('btn btn-info');
        //this is the box where the mouse has entered
        });
    //todo fix the propogation issue with button group - reset and remove active class

    choices.on('mouseleave',function(){
        $(this).removeClass('btn btn-info').addClass('btn btn-default')

         });

    //cleanBtn.on('click', constructAssa);

    choices.on('click', getRandomTask);



    function getRandomTask() {

        function getList(){
            //todo get the array corresponding to button clicked
            //var clean = ["c", "l", "e"];
            //var make = ["m", "a", "k"];
            //var open =["o", "p", "n"];


            var data = ["clean one fridge shelf",
                "clean one fridge drawer",
                "clean fridge coils",
                "clean mirrors",
                "wipe fridge door",
                "pull 8 weeds",
                "soak feet",
                "meditate for 5 minutes",
                "wipe computer screen"];


            //reset();

            } //function getList



            function selectTask() {
                var input = data;
                //get input from list of arrays in json object

                var shuffled = _.shuffle(input);
                //how do i chain this?

                var getThree = _.sample(shuffled);

                return getThree;
                //todo add nonreplacement conditional - taken
            }
            wells.each(function(){
                $(this).text(selectTask(data));
            });//todo hide and show wells

        };//function getRandomTask

    //function reset(){
        //    var parent = $(this).parent;
        //    parent.removeClass('.active');
        //    $(this).removeClass('btn btn-info');addClass('btn btn-default');
        //    wells.text('');
        //
        //}//function reset




});
