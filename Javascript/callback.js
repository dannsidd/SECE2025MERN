//callback

function submitForm(submit,db){
    
    var [dbName,comment]=db()
    console.log("DBName is",dbName);
    console.log(submit);
}

function database(){
    dbName="SECE"
    return [dbName,"Data stored in the database"]
}

submitForm("Form Submitted Successfully",database);