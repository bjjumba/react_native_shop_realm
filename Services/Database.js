import Realm from "realm";

// Declare Schema
class BookSchema extends Realm.Object {}
BookSchema.schema = {
    name: 'Book',
    properties: {
        title: 'string',
        pages:  'int',
        edition: 'int?'
    }
};

// Create realm
let realm = new Realm({schema: [BookSchema], schemaVersion: 1});
  //function to retrieve items
  let getAllBooks = () => {
    return realm.objects('Book');
}
//add new book
let addBook = (_title, _pages, _edition = null) => {
    realm.write(() => {
        const book = realm.create('Book', {
            title: _title,
            pages:  _pages,
            edition: _edition
        });
    });
}
//delete all books
let deleteAllBooks = () => {
    realm.write(() => {
        realm.delete(getAllBooks());
    })
}
//function to delete one item
let deleteOneBook=(name)=>{
    realm.write(()=>{
        realm.delete({title:names})
    })
}
//export functions for use

export {
  getAllBooks,
  addBook,
  deleteAllBooks,
  deleteOneBook
}
// Export the realm
export default realm;