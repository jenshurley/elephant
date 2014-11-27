//TEXT SELECTIONS
//for each well, choose a random array item with no replacement]



$(document).ready(function() {
    //var randomTask = getRandomTask();
    //var wells = [1,2,3];
    var data = ['weeds', 'handles', 'sinks', 'table', 'desk'];

    getRandomTask(data);

    function getRandomTask() {
        var min = 0;//i know. not how you do this.
        var max = data.length - 1;
            console.log(max);
        var randomIndex = Math.floor((Math.random() * (max - min)) + min);
            console.log(randomIndex);
        var task = data[randomIndex];

        //return task;
            console.log(task);

        $("#msg1").append(task);

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
//    forEach (wells){
//        $("#msg1").append(randomTask);
//        $("#msg2").append(randomTask);
//        $("#msg3").append(randomTask);
//    });
//
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
