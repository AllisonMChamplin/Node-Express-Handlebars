// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {


    $(".change-eat").on("click", function (event) {
        var id = $(this).data("id");
        var newEat = $(this).data("neweat");

        var newEatState = {
            devoured: newEat
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("changed eat to", newEat);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



});
