import { fetcherWithAuth, METHODS } from "@/lib/api";
import { URL_CREATE_GOODS, URL_DELETE_GOODS, URL_GET_GOODS, URL_UPDATE_GOODS } from "@/lib/url";
import { IGoodsRequest, IGoodsResponse } from "@/types/goods";

export const getAllGoods = async (body?: IGoodsRequest) => {
  const response = await fetcherWithAuth<IGoodsResponse>(URL_GET_GOODS, {
    method: METHODS.POST,
    data: body,
  });

  return response;
};


export const createGoods = async (body: IGoodsRequest) => {
  const response = await fetcherWithAuth<IGoodsResponse>(URL_CREATE_GOODS, {
    method: METHODS.POST,
    data: body,
  });

  return response;
};

export const updateGoods = async (body: IGoodsRequest) => {
  const response = await fetcherWithAuth<IGoodsResponse>(URL_UPDATE_GOODS, {
    method: METHODS.POST,
    data: body,
  });

  return response;
};


export const deleteGoods = async (body: IGoodsRequest) => {
  const response = await fetcherWithAuth<IGoodsResponse>(URL_DELETE_GOODS, {
    method: METHODS.POST,
    data: body,
  });

  return response;
};
