/**
 * Created by Ruth&Sydney on 28-Feb-2016.
 */

// this is a global variable
var db;


//handles transaction errors
function errorHandler(tx, error)
{
    console.error("SQL error: " + tx + " (" + error.code + ") -- " + error.message);
}


//handles transaction success
function successTransaction()
{
    console.info("Success: Transaction successful");
}

//creating database
var DB = {
    SECreateDatabase: function ()
    {
        var shortName = "ClubFeedBackDB";
        var version = "1.0";
        var displayName = "DataBae For Scrabble Club App";
        var dbSize = 2 * 1024 * 1024;
        console.info("Creating database  ");

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);


        //successful database creation
        function dbCreateSuccess() {
            console.info("Success!: Database creation successful");
        }

    },

    //creating two tables types and review
    SECreateTables: function ()
    {
        function successCreateType()
        {
            console.info("Success; Type table creation was successful");
        }

        function successCreateReview()
        {
            console.info("Success: Review table creation was successful")
        }


        function successDrop()
        {
            console.info("Success! Table was dropped");
        }

        //a transaction
        function txFunction(tx)
        {
            var options = [];

            var sqlTypeDrop = "DROP TABLE IF EXISTS type;";
            tx.executeSql(sqlTypeDrop,options, successDrop, errorHandler);

            console.info("Creating table: Type");
            var sqlType = "CREATE TABLE IF NOT EXISTS type (" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(20) NOT NULL);";

            tx.executeSql(sqlType, options, successCreateType, errorHandler);

            //insert 123
            var sql123 = "INSERT INTO type(name) " +
                "values('Canada', 'Asian', 'Others');";

            tx.executeSql(sql123, options, successCreateType, errorHandler);



             // Review Table Creation
            console.info("Creating table: Review");
            var sqlReview = "CREATE TABLE IF NOT EXISTS review( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "businessName VARCHAR(30) NOT NULL," +
                "typeId INTEGER NOT NULL," +
                "reviewerEmail VARCHAR(30)," +
                "reviewerComments TEXT," +
                "reviewDate DATE," +
                "hasRating VARCHAR(1)," +
                "rating1 INTEGER," +
                "rating2 INTEGER," +
                "rating3 INTEGER," +
                "FOREIGN KEY(typeId) REFERENCES type(id));"

            tx.executeSql(sqlReview, options, successCreateReview, errorHandler);

        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },


    //function named dropTables() that will drop both ‘type’ and ‘review’ tables
    //will be called  when Clear data base button under seetings is clicked
    SEDropTables: function ()
    {
        function successDrop()
        {
            console.info("Success: Dropping table successful");
        }


        function txFunction(tx)
        {
            var options = [];
            console.info("Dropping table: Type");
            var sqlTypeDrop = "DROP TABLE IF EXISTS type;";
            tx.executeSql(sqlTypeDrop, options, successDrop, errorHandler);


             //dropping Review
            console.info("Dropping table: Review");
            var sqlReviewDrop = "DROP TABLE IF EXITS review";
            tx.executeSql(sqlReviewDrop, options, successDrop, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);


    }
};


