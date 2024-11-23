import { fetcherWithAuth, METHODS } from "@/lib/api";
import { URL_GET_CUSTOMERS } from "@/lib/url";
import { ICustomerRequest } from "@/types/customer";

export const getAllCustomers = async (body?: ICustomerRequest) => {
  const response = await fetcherWithAuth<ICustomerRequest>(URL_GET_CUSTOMERS, {
    method: METHODS.POST,
    data: body,
  });

  return response;
};
