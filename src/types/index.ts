export interface IUser {
  id: number
  name: string
  email: string
  password: string
  'reset_password_token': string
  'created_at': Date
  'updated_at': Date
}

export type UserDTO = Pick<IUser, 'name' | 'email' | 'password'>
