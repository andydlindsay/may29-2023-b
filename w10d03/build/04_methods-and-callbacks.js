"use strict";
const myWriter = {
    realName: 'stephen king',
    penName: 'richard bachman',
    books: [],
    addBook: (title, numPages) => {
        return true;
    }
};
const higherOrderFunc = (fileName, callback) => { };
higherOrderFunc('file-one.txt', (arg) => { return 32; });
