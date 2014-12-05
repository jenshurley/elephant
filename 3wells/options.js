//TEXT SELECTIONS
//for each well, choose a different random array item (no replacement)]

//var data = ['weeds', 'handles', 'sinks', 'table', 'desk'];


$(document).ready(function() {
        //global variable of the different json arrays
        var wells = $('.well');

        wells.each(function(){
            $(this).text(getRandomTask(data))
            });



    function getRandomTask() {
        var min = 0;//i know. not how you do this.
        var max = data.length - 1;
            console.log(max);
        var randomIndex = Math.floor((Math.random() * (max - min)) + min);
            console.log(randomIndex);
        var task = data[randomIndex];

            console.log(task);
        return task;

        //$(".msg").append(task);

    };

});
