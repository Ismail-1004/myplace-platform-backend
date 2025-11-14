import {
    CreationOptional,
    InferAttributes,
    InferCreationAttributes,
    Model,
    ForeignKey
} from 'sequelize'

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<number>,
    name: string,
    phone: string,
    password: string,
    role?: 'user' | 'agent' | 'admin',
    avatar?: string | null
}

export interface TokenModel
  extends Model<InferAttributes<TokenModel>, InferCreationAttributes<TokenModel>> {
  id: CreationOptional<number>
  refreshToken: string
  userId: ForeignKey<number>
}