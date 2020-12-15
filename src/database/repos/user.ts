import { IUser, UserDTO } from '../../types'

interface IUserRepo {
  findOne(entry: Partial<IUser>): Promise<IUser | undefined>
  create(User: UserDTO): Promise<number>
}

class UserRepo implements IUserRepo {
  findOne (entry: Partial<IUser>): Promise<IUser | undefined> {
    throw new Error('Method not implemented.')
  }

  create (User: Pick<IUser, 'name' | 'email' | 'password'>): Promise<number> {
    throw new Error('Method not implemented.')
  }
}

export default new UserRepo()
