import { fetcherWithAuth, METHODS } from "@/lib/api";
import { URL_GET_USERS } from "@/lib/url";
import { IUserRequest, IUserResponse } from "@/types";

export const getAllUsers = async (body?: IUserRequest) => {
  const response = await fetcherWithAuth<IUserResponse>(URL_GET_USERS, {
    method: METHODS.POST,
    data: body,
  });

  return response;
};
