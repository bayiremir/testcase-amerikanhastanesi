import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASEURL} from '@env';
import {RootProduct} from '../../interface/products.interface';

const baseQuery = fetchBaseQuery({
  baseUrl: BASEURL,
  prepareHeaders: headers => {
    headers.set('Content-Type', 'application/json');

    return headers;
  },
});

const baseQueryWithCheck = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  // Unauthorized kontrolü ve hata işlemleri yapılabilir
  if (result.error?.status === 401) {
    console.error('Unauthorized, logging out...');
    // Çıkış işlemi veya toast mesaj
  }
  return result;
};

export const mobileApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithCheck,
  endpoints: builder => ({
    getProducts: builder.query<RootProduct, void>({
      query: () => '/',
    }),
  }),
});

export const {useGetProductsQuery} = mobileApi;
