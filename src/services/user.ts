import { fetcherWithAuth, METHODS } from "@/lib/api";
import { URL_CHANGE_PASSWORD, URL_GET_USERS, URL_ME } from "@/lib/url";
import { IUserRequest, IUserResponse } from "@/types";

export const getAllUsers = async (body?: IUserRequest) => {
  const response = await fetcherWithAuth<IUserResponse>(URL_GET_USERS, {
    method: METHODS.POST,
    data: body,
  });

  return response;
};

export const getMe = async () => {
  const response = await fetcherWithAuth<IUserResponse>(URL_ME, {
    method: METHODS.POST,
  });

  return response;
};

export const changePassword = async (data: { oldPwd: string, newPwd: string }) => {
  const response = await fetcherWithAuth<IUserResponse>(URL_CHANGE_PASSWORD, {
    method: METHODS.POST,
    data
  });

  return response;
};
