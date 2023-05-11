import { AuthRootModel } from "."

export const setupAuthRootStore = () => {
  const authRootTree = AuthRootModel.create({
    login: {
      users: [ 
        { login: 'admin', password: '123' },
        { login: 'user', password: 'qwerty' },
        { login: 'anea', password: 'anea' }
      ]
    }
  });

  return { authRootTree };
}