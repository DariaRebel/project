import { Task } from 'entities/task/model/types';
import { baseApi } from 'shared/api/baseApi';


export const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

      getTasks: build.query<Task[], void>({
        query: () => 'todos',
        transformResponse: (resp: { todos: Task[] }) => resp.todos,
        providesTags: ['Tasks'],
      }),
    }),
 });

export const { useGetTasksQuery } = usersApi;
