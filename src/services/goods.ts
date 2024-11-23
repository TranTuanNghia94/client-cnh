import { fetcherWithAuth, METHODS } from "@/lib/api";
import { URL_GET_GOODS } from "@/lib/url";
import { IGoodsRequest, IGoodsResponse } from "@/types/goods";

export const getAllGoods = async (body?: IGoodsRequest) => {
  const response = await fetcherWithAuth<IGoodsResponse>(URL_GET_GOODS, {
    method: METHODS.POST,
    data: body,
  });

  return response;
};
