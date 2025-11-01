//import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ky from 'ky';

export const api = ky.create({ prefixUrl: "https://api.v2.react-learning.ru" });

// export const baseApi = createApi({
//         reducerPath: 'api',
//         baseQuery: fetchBaseQuery({
//         baseUrl: 'https://dummyjson.com/',
//     }),
//     tagTypes: ['Tasks', 'Posts', '...'],
//     endpoints: () => ({}),
// });

