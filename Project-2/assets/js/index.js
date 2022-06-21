// const {$where} = require("../../server/model/model");


$("#add-user").submit(function(event){
    alert("Request Logged! Thank you!")
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $("#update_user").serializeArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Request Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Request Deleted Successfully!");
                location.reload();
            })
        }

    })
}