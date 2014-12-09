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
    //todo reset button



    function getRandomTask() {
        //var input = [];
        var input = data;
        //get input from list of arrays in json object

        var shuffled = _.shuffle(input);
        //how do i chain this??

        var getThree = _.sample(shuffled);

        return getThree;

    };


    //function getRandomTask() {
    //    var min = 0;
    //    var max = data.length - 1;
    //        console.log(max);
    //    var randomIndex = Math.floor((Math.random() * (max - min)) + min);
    //        console.log(randomIndex);
    //    var task = data[randomIndex];
    //
    //        console.log(task);
    //    return task;

        //$(".msg").append(task);

    //};

});
