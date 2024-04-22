/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUserScheme} from '@entities'
import { calendarApi, lessonCardApi, loginFormApi } from "@features";

export interface StateScheme {
    user: TUserScheme;
    [loginFormApi.reducerPath]: any;
    [calendarApi.reducerPath]: any;
    [lessonCardApi.reducerPath]: any;
}