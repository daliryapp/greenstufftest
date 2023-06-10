import moment from "moment";
export function calcTotalPages(total?: number, pageSize?: number): number {
    const value = Math.ceil(Number(total) / Number(pageSize));
    return isNaN(value) ? 1 : value;
}
export const dateToMoment = (date?: any) => {
    if (!date) return moment();
    return moment(date, 'YYYY/MM/DD')
}