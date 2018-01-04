/**
 * Created by Ruth&Sydney on 30-Mar-2016.
 */


//addFeed back with validations
function SEAddFeedback()
{
    if(doValidate_frmAddFeedBack())
    {
        console.info("Validation is successful, ready to insert");

        var businessName = $("#txtName1").val();
        var type = $("#optType").val();
        var reviewerEmail = $("#txtRevEmail1").val();
        var comments = $("#comments").val();
        var reviewDate = $("#txtRevDate1").val();
        var chkRating = $("#chkRating").prop("checked");

        if(!chkRating)
        {
            var options = [businessName, type, reviewerEmail, comments, reviewDate, chkRating, null, null, null];
        }
        else
        {

            var gameQuality = $("#valueGameAdd").val();
            var serviceAdd = $("#valueServiceAdd").val();
            var valueAdd = $("#valueValueAdd").val();
            var options = [businessName, type, reviewerEmail, comments, reviewDate, chkRating, gameQuality, serviceAdd, valueAdd];
        }
        Review.SEinsert(options);

    }
}

//updatng review page

function SEGetReviews()
{
    function successShowAll(tx, results)
    {
        var htmlCode = "";
        console.info(results.rows.length);

        for (var i = 0; i < results.rows.length; i++)
        {
            var row = results.rows[i];

            //to calculate overall rating if the hasRating field is true
            var overall = ((row['rating1'] + row['rating2'] + row['rating3'])/15 * 100).toFixed(2) + "%";

            console.info("id: " + row['id'] + "Business Name : " + row['BizName'] +
                " Reviewer Email: " + row['reviewerEmail'] +
                " Comments: " + row['comments'] + " Overall Ratings " + row['overallRatings']);

            htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] +

                " href='#'> " + "<h1>Business Name: " + row['BizName'] + "</h1>" +
                "<h3>Reviewer Email: "+ row['reviewerEmail']+"</h3>" +
                "<h3>Comments:"+ row['comments'] +"</h3>" +
                "<h3>Overall Ratings:"+ row['overallRatings'] +"</h3>" +
                "</a></li>";
        }

        var lv = $("#SEFeedbackList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");
        $("#SEFeedbackList a").on("click", clickHandler);

        //local storage and navigation to modify page
        function clickHandler()
        {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', '#SEEditFeedbackPage')
        }


    }
    Review.SEselectAll(successShowAll);
}

// upDate Type drop down
function SEUpdateTypesDropdown(id)
{
    Type.SEselectAll(selectAll);

    function selectAll(tx, results)
    {
        var htmlCode = "";
        var defaultValue = 0;

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            htmlCode += "<option value='" + row['id'] + "'>" + row['name'] + "</option>";
            if (row['name'] == "Others")
            {
                defaultValue = row['id'];
            }
        }

        var dropownmenu = $(id);
        dropdownmenu.html(htmlCode);
        dropdownmenu.val(defaultValue);
        dropdownmenu.selectmenu("refresh");
    }
}

//showing current review task 6
function SEshowCurrentReview()
{
    var id = localStorage.getItem("id");
    var options = [id];

    function dataAccess(tx, results)
    {
        var row = results.rows[0];
        $("#bizName1").val(row['businessName']);
        $("#optType2").val(row['typeId']);
        $("#txtEmailList").val(row['reviewerEmail']);
        $("#comment1").val(row['reviewerComments']);
        $("#txtRevDate2").val(row['reviewDate']);

        //show/hide ratings on hasRatings
        if (row['hasRating'] == "true")
        {
            $("#chkRating2").prop("checked", true);
            $("#hideModifyPage").show();
        }
        else
        {
            $("#chkRating2").prop("checked", false);
            $("#hideModifyPage").hide();
        }

        $("#valueGame").val(row['rating1']);
        $("#valueService").val(row['rating2']);
        $("#valueValue").val(row['rating3']);
        $("#hideModifyPage").val(((row['rating1'] + row['rating2'] + row['rating3']) / 15 * 100).toFixed(2) + "%");

        $("#chkRating2").checkboxradio("refresh");
        $("#optType2").selectmenu("refresh");
    }

    Review.SEselect(options, dataAccess);
}

//updating feed back
function SEupdateFeedback()
{
    if (checkValidations_modify())
    {
        console.info("Validation is successful, ready to update");

        var id = localStorage.getItem("id");
        var businessName = $("#businessName_modify").val();
        var typeList = $("#typeList_modify").val();
        var reviewerEmail = $("#reviewerEmail_modify").val();
        var comments = $("#comment_modify").val();
        var reviewDate = $("#reviewDate_modify").val();
        var addRatings = $("#addRatings_modify").prop("checked");

        if (!addRatings){
            var options = [businessName, typeList, reviewerEmail, comments, reviewDate, addRatings, null, null, null, id];
        }
        else {
            var foodQuality = $("#foodQuality_modify").val();
            var service = $("#service_modify").val();
            var value = $("#value_modify").val();
            var options = [businessName, typeList, reviewerEmail, comments, reviewDate, addRatings, foodQuality, service, value,id];
        }
        Review.NKUpdate(options);
        $(location).prop('href', '#NKViewFeedbackPage');
    }
}
