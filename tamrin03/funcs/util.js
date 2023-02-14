
function find(id,books){
    const bookFind = books.find((item) =>{
        return item.id === Number(id);
    })
    return bookFind;
}
function findIndex(id, people) {
    const index = people.find((item) => {
        return item.id === Number(id);
    });
    console.log("index => ",index);
    return index;
}

module.exports = {find,findIndex}