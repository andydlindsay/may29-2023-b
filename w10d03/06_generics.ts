interface Container<T> {
  name: string;
  contents: T;
}

const stringContainer: Container<string> = {
  name: 'string container',
  contents: 'has to be a string'
}

const booleanContainer: Container<boolean> = {
  name: 'boolean container',
  contents: false
}
