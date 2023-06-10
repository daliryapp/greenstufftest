import {makeStyles} from '@core/theme';

const useDetailModalStyle = makeStyles(({
                                            spacing,
                                            palette: {
                                                primary,
                                                secondary
                                            }
                                        }: any) => ({
    detailBox: {
        width: 650,
        height: 450,
        '@media (max-width: 900px)': {
            width: '100%',
            height: '100%',
        }
    }

}), {index: 2});

export default useDetailModalStyle;