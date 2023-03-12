const mongoose = require ('mongoose');
const bakeryDb = 'bakeryDb';

mongoose
.connect(`mongodb://localhost/${bakeryDb}`)
.then(()=> {
    console.log(`connected to ${bakeryDb}`)
})
.catch((err)=> {
    console.log(`Problem connecting to ${bakeryDb}. Error:`, err)
})