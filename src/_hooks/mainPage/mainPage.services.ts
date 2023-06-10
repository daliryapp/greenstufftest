import {useQuery, useInfiniteQuery} from 'react-query'
import ApiCall from '../../@core/client/apiCall';
import {calcTotalPages} from '../../@core/utils/helper'

const limit = 10;
export const useGetProductListInfinite = (params: any = {}) => {
    return useInfiniteQuery(
        ["useReadCores", params],
        ({pageParam = 1}) =>
            ApiCall(
                "get",
                `/cores`,
                null,
                {...params, offset: pageParam, limit},
                (res: any): any => {

                    return {
                        list: res.data,
                        total: calcTotalPages(parseInt(res?.headers?.['spacex-api-count']), limit),
                        count: parseInt(res?.headers?.['spacex-api-count']),
                    }
                }
            ),

        {
            enabled: false,
            getPreviousPageParam: (firstPage, pages) => {
                return firstPage?.total === pages.length ? undefined : pages.length - 1;
            },
            getNextPageParam: (lastPage, pages) => {
                return lastPage?.total === pages.length ? undefined : pages.length + 1;
            },
            keepPreviousData: false
        }
    );
};
export const useGetDetail = (core_serial: string, isEnabled: boolean = true) => useQuery(
    ['useReadDetail', core_serial],
    () =>
        ApiCall('get', `/cores/${core_serial}`, null, null, (res: any) => res?.data),
    {enabled: isEnabled}
)