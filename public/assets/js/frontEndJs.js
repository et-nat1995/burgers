$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger").val().trim()
        }

        $.ajax("/api/addBurger",{
            method: "POST",
            data: newBurger
        }).then(function(){
            console.log("New Burger Added");
            location.reload();
        });
    });

    $(".devoured").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        $(this).remove();

        $.ajax("/api/devoured/" + id,{
            method: "PUT"
        }).then(function(){
            let dataDelete = $("[data-id-delete="+ id +"]");
            let placeToAdded = $(".addDeletedHere");
            dataDelete.clone().appendTo(placeToAdded);
            dataDelete.remove();
            console.log("You Fat Ass, you ate the burger...");
        })
    })
});