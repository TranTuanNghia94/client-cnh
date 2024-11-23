import { fetcherWithAuth, METHODS } from "@/lib/api";
import { URL_GET_VENDORS } from "@/lib/url";
import { IVendorRequest } from "@/types/vendor";

export const getAllVendors = async (body?: IVendorRequest) => {
    const response = await fetcherWithAuth<IVendorRequest>(URL_GET_VENDORS, {
      method: METHODS.POST,
      data: body,
    });
  
    return response;
  };
  