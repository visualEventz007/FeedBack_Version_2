/**
 * Created by Ruth&Sydney on 28-Feb-2016.
 */


//the initialized method
function init()
{
    $("#valueGameAdd").val(0);
    $("#valueServiceAdd").val(0);
    $("#valueValueAdd").val(0);

    //from modify page
    $("#valueGame").val(0);
    $("#valueService").val(0);
    $("#valueValue").val(0);

// for add page
    $("#chkRating").on("change", chkRating_change);
    $("#valueGameAdd").on("change", numRatingCalculator);
    $("#valueServiceAdd").on("change", numRatingCalculator);
    $("#valueValueAdd").on("change", numRatingCalculator);

    //for modify page
    $("#chkRating2").on("change", chkRating_change);
    $("#txtMPFoodQuality").on("change", numRatingCalculator);
    $("#txtMPValue").on("change", numRatingCalculator);
    $("#txtMPService").on("change", numRatingCalculator);

    $("#radSave").on("click", radSave_click);
    $("#btnUpdate").on("click", btnUpdate_click);
    $("#btnSaveDef").on("click", btnSaveDef_click);


    //for pageshow event

    $("#pageFriends").on("pageshow", pageFriends_show);
}

//for the calculation
function numRatingCalculator()
{
    var gameQuality = parseInt($("#valueGameAdd").val());
    var service = parseInt($("#valueServiceAdd").val());
    var value = parseInt($("#valueValueAdd").val());
    var resultRate = Math.round(((gameQuality + service + value) * 100) / 15);

    $("#overAdd").val(resultRate);


//logic for modify page
    var gameQualityMP = parseInt($("#valueGame").val());
    var serviceMP = parseInt($("#valueService").val());
    var valueMP = parseInt($("#valueValue").val());
    var resultRateMP = Math.round(((gameQualityMP + serviceMP + valueMP) * 100) / 15);

    $("#calculator").val(resultRateMP);
}

//logic for hide and show check box
function chkRating_change()
{


    if ($("#chkRating").prop("checked"))
    {
        $("#ratingHidden").show();
    }
    else {
        $("#ratingHidden").hide();
    }

    //for modify page
    if ($("#chkRating2").prop("checked"))
    {
        $("#hideModifyPage").show();
    }
    else {
        $("#hideModifyPage").hide();
    }

}


//hide logic on add page
function ratingHidden()
{
    $("#ratingHidden").hide();
}

//hide logic on modify page
function hideModifyPage()
{
    $("#hideModifyPage").hide();
}

//radio button on add page, validates add form
function radSave_click()
{
    doValidate_frmAddFeedBack();
}


//click event handler for save
function radSave_click()
{
    SEAddFeedback();
}

//update button on modify page, validates form
function btnUpdate_click()
{
    doValidate_frmAddForm2();
}

//for the default button on settings
function defaultEmail()
{
    $("#btnSaveDef").val();
}

//for the default save button on settings
function btnSaveDef_click()
{
    var defaultEmail = $("#txtEmail").val();
    localStorage.setItem("defaultEmail", defaultEmail);
    alert("The Default Email is now Saved!");
}


//
function addFeedback_pageshow()
{
    showAllFriends();
}
//event handler for reviews page
function viewFeedback_pageshow()
{
    SEGetReviews();
}

//pageShow event calling show current review
function editFeedback_pageshow()
{
    SEshowCurrentReview()
}

//the DOM is Ready
$(document).ready(function ()
{
    ratingHidden();
    hideModifyPage();
    init();
    defaultEmail();
    btnUpdate_click();

});