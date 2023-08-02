interface Pet {
  breed: string;
  name: string;
}

interface User {
  id?: number;
  username: string;
  password: string;
}

const user: User = {
  // id: 42,
  username: 'alice',
  password: '1234'
};

const users: User[] = [];

users.push(user);
