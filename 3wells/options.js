//TEXT SELECTIONS
//for each well, choose a different random array item (no replacement)]

//var data = ['weeds', 'handles', 'sinks', 'table', 'desk'];


$(document).ready(function() {
    //var myTask = getRandomTask();
    //var wells = $('.well');
    //var data = ['weeds', 'handles', 'sinks', 'table', 'desk'];

    //$('.well').each(function(index, element){
    //    getRandomTask(data);
    //
    //});

    //$('.tasks').click(function(){
    //    console.log('clicked');
    //    $('.msg1').append(getRandomTask(data));
    //    //$('.msg1' '.msg2' '.msg3').append(getRandomTask(data));
    //    //$('.msg2').getRandomTask(data);
    //    //$('.msg3').getRandomTask(data);
    //});

    //function (){
        //var data = ['weeds', 'handles', 'sinks', 'table', 'desk'];
        var wells = $('.well');

        wells.each(function(){
            $(this).text(getRandomTask(data))
            });


    //$(wells).each(function(){
    //    getRandomTask(data)
    //});


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

//
//function renderWells(wells){
//    for (var i = 0; i <2; i++) {
//        console.log("renderWells");
//
//        if (i ===0) {
//            $("#msg1").append(randomTask);
//        } else
//        if (i===1){
//            $("#msg2").append(randomTask);
//        } else {
//            $("#msg3").append(randomTask);
//        }
//    }
//
//    $.each(wells, getRandomTask(data);
//{
    //    $("#msg1").append(randomTask);
    //    $("#msg2").append(randomTask);
    //    $("#msg3").append(randomTask);
    //});

//});
//
//};
//


//    var html;
//
//    html = "<h3>Do this</h3>";
//
//
//    data.forEach(function (employee, index) {
//
//        html += "<tr>";
//        html += "<td>" + employee.name + "</td>";
//        html += "<td>" + employee.phone + "</td>";
//        html += "<td>" + employee.address + "</td>";
//        html += "<td><button type='button' class='btn btn-default btn-sm delete' index='" + index + "'>Del</button></td>";
//        html += "<td><button type='button' class='btn btn-default btn-sm edit' index='" + index + "'>Edit</button></td>";
//        html += "<td><button type='button' class='btn btn-default btn-sm map' index='" + index + "'>Map</button></td>";
//        html += "</tr>";
//    })
//
//
//    html += "</table>";
//
//    $("#employee_list").html(html);
//};

/**
 * Created by Jen on 11/26/2014.
 */
