/**
 * Created by Ruth&Sydney on 28-Feb-2016.
 */


//including CRUD operation for review

var review =
{
    SEinsert: function(options)
    {

        function txFunction(tx)
        {
            var sqlite= "INSERT INTO review(businessName, typeId,reviewerEmail," +
                "reviewerComments, reviewDate, hasRating, rating1, rating2, rating3) " +
                "values(?,?,?,?,?,?,?,?,?);";

            function successInsert()
            {
                console.info("Success: Insert successful");
                alert("New Feed Back was added. Thank you, See you soon!");
            }
            tx.executeSql(sqlite, options, successInsert, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },


    // selection  of all reviews
    SEselectAll: function(callback)
    {
        var options = [];

        function txFunction(tx)
        {
            console.info("Selecting all reviews");
            var sqlite = "SELECT * FROM review;";


            tx.executeSql(sqlite, options, callback, errorHandler  );
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    //selecting a review
    SEselect: function(options, callback)
    {

        function txFunction(tx)
        {
            console.info("Selecting a review.");
            var sqlite = "SELECT * FROM review WHERE id=?;";

            tx.executeSql(sqlite,options,callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    //updating review
    SEupdate: function(options)
    {

        function txFunction(tx)
        {
            console.info("Updating .. ");
            var sqlite = "UPDATE review " +
                "SET businessName=?, typeId=?, reviewerEmail=?, reviewerComments=?, " +
                "reviewDate=?,hasRating=?, rating1=?, rating2=?, rating3=?" +
                "WHERE id=?;";

            function successUpdate()
            {
                console.info("Success: Update was successful");
                alert(" Feed back Record updated successfully");
            }
            tx.executeSql(sqlite, options, successUpdate, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    //
    SEdelete: function(options)
    {

        function txFunction(tx)
        {
            console.info("Deleting...");
            var sqlite = "DELETE FROM review " +
                "WHERE id=?;";

            function successDelete()
            {
                console.info("Success: Delete successful.");
                alert(" Feed back Record deleted successfully");
            }
            tx.executeSql(sqlite, options,successDelete, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};


//including CRUD operation for type

var type =
{

    //
    SEselectAll: function(callback)
    {
        var options = [];

        function txFunction(tx)
        {
            console.info("Selecting all types");
            var sql = "SELECT * FROM type;";


            tx.executeSql(sql, options, callback, errorHandler  );
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }

};

