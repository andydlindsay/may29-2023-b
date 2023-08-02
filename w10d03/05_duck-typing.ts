interface PotentialUser {
  username: string;
  password: string;
}

const login = (user: PotentialUser): boolean => {
  user.username

  return true;
};

const myObj = {
  username: 'jstamos',
  password: '1234',
  bffs: [],
  tvShows: [],
  bands: []
};

login(myObj);
