const DataStore = require('nedb');
const db = new DataStore({filename: '../store/project'});

db.loadDatabase(err=>{
    console.log(err);
});

var docs = {
    name: "Kristian",
    lastname: "Ruben",
    old: "24",
    dateborn: "1996-02-09",
}

db.insert(docs, (err, newDoc)=>{
    if(err) throw new Error("insert failed");

    console.log(newDoc);
})

const insert_data = (data, callback)=>{
    db.insert(data, (err, newDoc)=>{
        if(err) throw new Error("Insert failed");

        callback(newDoc);
    });
}

const update_data = (find, newData, callback)=>{
    db.update(find, newData, {multi: true}, (err, numReplace)=>{
        
    });
}