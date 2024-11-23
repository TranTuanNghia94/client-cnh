import { Prisma } from "./schema";

export interface IUserResponse {
  metadata?: object;
  version: number;
  id: string;
  authId: string;
  username: string;
  email: string;
  phone?: string;
  phongBan?: string;
  password?: string;
  firstname?: string;
  fullname?: string;
  lastname?: string;
  birthday?: Date;
  pronounce?: string;
  roles?: string[];
  Assignment?: IAssignmentRes;
  disabledAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IRolesResponse {
  metadata?: string;
  version?: number;
  id?: string;
  name?: string;
  displayName?: string;
  description?: string;
  isSystemUsage?: false;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
  deletedAt?: Date | string | null;
}

export interface IAclResponse {
  metadata?: object;
  version: number;
  id: string;
  name: string;
  displayName?: string;
  groupName?: string;
  groupDescription?: string;
  description?: string;
  Assignments: IAssignmentRes[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IAssignmentRes {
  metadata?: object;
  version: number;
  id: string;
  User?: IUserResponse;
  userId?: string;
  AssignedACLItems: IAclResponse[];
  Roles: IRolesResponse[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type IQueryUser = Prisma.UserSelect;

export type IUserInput = Prisma.UserCreateInput;

export type IUserUpdateInput = Prisma.UserUpdateInput;

export type IUserWhere = Prisma.UserWhereInput;

export interface IUserRequest {
	select?: IQueryUser;
	include?: IQueryUser;
	where?: IUserWhere;
	take?: number;
	skip?: number;
	data?: IUserInput;
}