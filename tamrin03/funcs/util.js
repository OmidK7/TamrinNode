
function find(id,books){
    const bookFind = books.find((item) =>{
        return item.id === Number(id);
    })
    return bookFind;
}

function findIndex(id, books) {
    const index = books.find((item) => {
        return item.id === Number(id);
    });
    return index;
}

module.exports = {find,findIndex}