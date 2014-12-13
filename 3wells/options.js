//TEXT SELECTIONS
//for each well, choose a different random array item (no replacement)]


$(document).ready(function() {
        //global variable of the different json arrays
    var table = $('#lists');
    var tbody = table.find('tbody');

    var listField= $('#listName');
    var itemField = $('#item');
    var addButton = $('#add');
    var clearAll = $('#clearAll'); //todo add this button

    // Check to see if we have existing records
    var wellsLists = localStorage.getItem('wellsLists');
    wellsLists = JSON.parse(wellsLists);


    var choices = $('.btn'); //choice of list as the buttons present them
    var cleanBtn = $('#clean');
    var makeBtn = $('#make');
    var openBtn =$('#open');

    var wells = $('.well'); //selects the bootstrap wells

    $('#tableContainer').hide();

    addButton.click(function() {
        console.log('clicked!');
        $('#tableContainer').slideDown().show();
        $('#listChoice').text(' > Add New Items');
        });//adds the table for entering new items
//todo fix the slide. looks weird.

    choices.on('mouseenter',function(){
        console.log('m.e.');
        $(this).removeClass('btn btn-default').addClass('btn btn-info');
        //this is the box where the mouse has entered
        });


    choices.on('mouseleave',function(){
        $(this).removeClass('btn btn-info').addClass('btn btn-default')

         });

    //cleanBtn.on('click', getArray);


    //makeBtn.on('click', constructArray);

    //openBtn.on('click', )

    choices.on('click', getRandomTask);


    if(!wellsLists){
        wellsLists = [];
    } else {
        wellsLists.forEach(function(record){
            tbody.append( makeRow(record) );
        });
    }


    addButton.on('click', function(){

        var list = listField.val();
        var item = itemField.val();

        if(list == 'clean' || list == 'make' || list == 'open'){
            var record = {
                list: list,
                item: item,
                ts: Date.now()
            };

            wellsLists.push(record);

            save();

            tbody.append( makeRow(record) );
    //todo fix this -- row not being appended. also console log localStorage get to see if ...
            listField.val("");
            itemField.val("").css({borderColor: ''});


            } else {
            listField.css({
                borderColor: 'red'
            });
        }

    });


    tbody.on('click', 'button.remove', function(event){
        var row = $(this).parents('tr');
        var id = row.data('id');

        wellsLists = wellsLists.filter(function(record){
            return (record.ts !== id);
        });

        save();

        row.remove();
    });

    clearAll.on('click', function(){
        tbody.empty();
        wellsLists = [];
        save();
    });

    function save(){
        localStorage.setItem('wellsLists', JSON.stringify(wellsLists));
    }

    function makeRow(record){
        return "<tr data-id='"+ record.ts +"'>" +
            "<td>" + record.list + "</td>" +
            "<td>" + record.item + "</td>" +
            "<td><button class='remove btn btn-primary btn-xs'>remove</button></td>" +
            "</tr>";
    }




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

});//document ready