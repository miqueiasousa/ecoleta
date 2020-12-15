import knex from '../../utils/knex'
import { IUser, UserDTO } from '../../types'

interface IUserRepo {
  findOne(entry: Partial<IUser>): Promise<IUser | undefined>
  create(User: UserDTO): Promise<number>
}

class UserRepo implements IUserRepo {
  private initKnex () {
    return knex<IUser>('users')
  }

  async findOne (entry: Partial<IUser>) {
    const userByName = await this.initKnex()
      .select('*')
      .where(entry)
      .first()

    return userByName
  }

  create (User: Pick<IUser, 'name' | 'email' | 'password'>): Promise<number> {
    throw new Error('Method not implemented.')
  }
}

export default new UserRepo()
