import { fetcherWithAuth, METHODS } from "@/lib/api";
import { URL_GET_GROUP_OF_GOODS } from "@/lib/url";
import { IGroupOfGoodsRequest, IGroupOfGoodsResponse } from "@/types/type";

export const getAllTypes = async (body?: IGroupOfGoodsRequest) => {
  const response = await fetcherWithAuth<IGroupOfGoodsResponse>(
    URL_GET_GROUP_OF_GOODS,
    {
      method: METHODS.POST,
      data: body,
    }
  );

  return response;
};
