/**
 * Created by Ruth&Sydney on 28-Feb-2016.
 */
//rules and messages for Add A FeedBack Page

function doValidate_frmAddFeedBack()
{
    var form = $("#SEAddForm");
    //our validation logic
    form.validate({
        rules: {
            txtName1: {
                required: true,
                minlength: 2
            },
            txtRevEmail1: {
                required: true,
                rangelength: [2, 50]
            },
            txtRevDate1: {
                required: true,

            },

            valueGameAdd: {
                required: true,
                validateRate: true
            },

            valueServiceAdd: {
                required: true,
                validateRate: true
            },

            valueValueAdd: {
                required: true,
                validateRate: true
            }
        },

        //our messages
        messages:
        {
            txtName1:
            {
                required: "Please enter a Business Name",
                minlength: "Must be 2-30 characters long"
            },
            txtRevEmail1:
            {
                required: "Please Enter a valid Email Address",
                rangelength: "Email too short; must be 2-50 characters long"
            },
            txtRevDate1:
            {
                required: "Review date is required"
            },

            valueGameAdd:
            {
                validateRate: "Value must be 0-5"
            },

            valueServiceAdd:
            {
                validateRate: "Value must be 0-5"
            },


            valueValueAdd:
            {
                validateRate: "Value must be 0-5"
            }

        }
    });

    // validation logic ends
    return form.valid();

}



    //rules and messages for Modify FeedBack Page
    function doValidate_frmAddForm2()
    {
        var form2 = $("#SEAddForm2");
        //our validation logic
        form2.validate
        ({
            rules:
            {
                bizName1:{
                    required: true,
                    minlength: 2
                },
                txtEmailList:
                {
                    required: true,
                    rangelength: [10,50]
                },
                txtRevDate2:
                {
                    required: true,

                },

                valueGame:
                {
                    required: true,
                    validateRate:true

                },

                valueService:
                {
                    required: true,
                    validateRate: true
                },

                valueValue:
                {
                    required: true,
                    validateRate: true
                }
            },

            //our messages
            messages:
            {
                bizName1:
                {
                    required: "Please enter a Business Name",
                    minlength: "Must be 2-30 characters long"
                },
                txtEmailList:
                {
                    required: "Please Enter a valid Email Address",
                    rangelength: "Email too short; must be 2-50 characters long"
                },
                txtRevDate2:
                {
                    required: "Review date is required"
                },

                valueGame:
                {
                    validateRate: "Value must be 0-5"
                },

                valueService:
                {
                    validateRate: "Value must be 0-5"
                },


                valueValue:
                {
                    validateRate: "Value must be 0-5"
                }

            }
        });

        // validation logic ends
        return form2.valid();

}



//rate validator
jQuery.validator.addMethod("validateRate", function (value, element)

{
    if (value < 0 || value > 5)
    {
        return false;
    }

    else
    {
        return true;
    }
    return this.optional(element);

},
    "rate must be 0-5");