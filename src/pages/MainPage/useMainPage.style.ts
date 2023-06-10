import {makeStyles} from '@core/theme';

const useMainPageStyle = makeStyles(({
                                         spacing,
                                         palette: {
                                             primary,
                                             secondary
                                         }
                                     }: any) => ({
    tableHeadRow: {
        '& .MuiTableCell-root': {
            border: 0
        }
    },
    orderRow: {

        '& .MuiTableCell-root': {
            borderBottom: `1px solid ${primary.main}`,
        }
    },
    primaryText: {
        color: `${primary.main} !important`
    },
    hintColor: {
        color: `${secondary.main} !important`
    },
}), {index: 1});

export default useMainPageStyle;
