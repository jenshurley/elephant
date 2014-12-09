//TEXT SELECTIONS
//for each well, choose a different random array item (no replacement)]


$(document).ready(function() {
        //global variable of the different json arrays
        var wells = $('.well');

        wells.each(function(){
            $(this).text(getRandomTask(data))
            });

        //submit.on('click',function(){
        //    getRandomTask();
        //
    //todo access different arrays?


    function getRandomTask() {
        //var input = [];
        var input = data;
        //get input from list of arrays in json object

        var shuffled = _.shuffle(input);
        //how do i chain this??

        var getThree = _.sample(shuffled);

        return getThree;

    };



});
