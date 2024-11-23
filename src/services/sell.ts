import { fetcherWithAuth, METHODS } from "@/lib/api";
import { URL_GET_ORDERS } from "@/lib/url";
import { ISellRequest, ISellResponse } from "@/types/sell";

export const getAllSells = async (body?: ISellRequest) => {
  const response = await fetcherWithAuth<ISellResponse>(URL_GET_ORDERS, {
    method: METHODS.POST,
    data: body,
  });

  return response;
};
