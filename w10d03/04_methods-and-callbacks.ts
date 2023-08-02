interface Writer {
  realName: string;
  penName: string;
  books: [],
  addBook: (title: string, numPages: number) => boolean;
}

const myWriter: Writer = {
  realName: 'stephen king',
  penName: 'richard bachman',
  books: [],
  addBook: (title, numPages) => {
    return true;
  }
};

const higherOrderFunc = (fileName: string, callback: (data: string) => number): void => {};

higherOrderFunc('file-one.txt', (arg: string) => { return 32; });