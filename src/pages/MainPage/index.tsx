import {FC, useState, useEffect} from "react";
import VisibilitySensor from "react-visibility-sensor";
import {
    Container,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Skeleton,
    Typography,
    Box,
    Button,
    LinearProgress,
    Stack,
    CircularProgress
} from "@mui/material";
import useMainPageStyle from './useMainPage.style';
import {useGetProductListInfinite} from "../../_hooks/mainPage/mainPage.services";
import {useSelector} from 'react-redux';
import DetailModal from './components/detailModal';
import {dateToMoment} from '@core/utils/helper';


const MainPage: FC = () => {
    const [inView, setInView] = useState<boolean>(false);
    const modal = useSelector((state: any) => state.app.modal)
    const classes = useMainPageStyle();
    const {
        data: productListData,
        fetchNextPage,
        isLoading,
        isFetchingNextPage,
    } = useGetProductListInfinite();
    useEffect(() => {
        if (inView && !isLoading) { // get next pages
            fetchNextPage();
        } else if (!productListData && !isLoading) { //when screen is very small get data for first load
            fetchNextPage();
        }
    }, [inView, fetchNextPage, isLoading, productListData]);
    const loadDefailModal = (serialCode: string) => {
        modal.show(<DetailModal serialCode={serialCode}/>);
    }
    return (<>
        <Box sx={{width: '100%', height: 50}}>
            {(isLoading || isFetchingNextPage) &&
                <LinearProgress/>
            }
        </Box>

        <Container maxWidth={"xl"}>
            <Box sx={{width: '100%', mt: 6}}>
                <Paper sx={{
                    width: '100%', mb: 2, '& .MuiTableContainer-root': {
                        minHeight: 450,
                    }
                }}>
                    <TableContainer>
                        <Table
                            sx={{minWidth: 750, borderCollapse: 'separate'}}
                            aria-labelledby="tableTitle"
                            size={"medium"}
                        >
                            <TableHead>
                                <TableRow className={classes.tableHeadRow}>
                                    <TableCell align="center"><Typography variant="h5">Core
                                        Serial</Typography></TableCell>
                                    <TableCell align="center"><Typography
                                        variant="h5">asds_landings</Typography></TableCell>
                                    <TableCell align="center"><Typography
                                        variant="h5">reuse_count</Typography></TableCell>
                                    <TableCell align="center"><Typography
                                        variant="h5">rtls_attempts</Typography></TableCell>
                                    <TableCell align="center"><Typography variant="h5">Date</Typography></TableCell>
                                    <TableCell align="center"><Typography variant="h5">Actions</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {isLoading
                                    ? Array(10)
                                        .fill({})
                                        .map((_, i) => (<>
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={`row-loading-${i}`}
                                                className={classes.orderRow}
                                            >
                                                <TableCell align="center">
                                                    <Skeleton
                                                        animation="wave"
                                                        width={85}
                                                        height={12}
                                                        sx={{
                                                            transform: "scale(1)",
                                                            zIndex: 1
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Skeleton
                                                        animation="wave"
                                                        width={85}
                                                        height={12}
                                                        sx={{
                                                            transform: "scale(1)",
                                                            zIndex: 1
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Skeleton
                                                        animation="wave"
                                                        width={85}
                                                        height={12}
                                                        sx={{
                                                            transform: "scale(1)",
                                                            zIndex: 1
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Skeleton
                                                        animation="wave"
                                                        width={85}
                                                        height={12}
                                                        sx={{
                                                            transform: "scale(1)",
                                                            zIndex: 1
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Skeleton
                                                        animation="wave"
                                                        width={85}
                                                        height={12}
                                                        sx={{
                                                            transform: "scale(1)",
                                                            zIndex: 1
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Skeleton
                                                        animation="wave"
                                                        width={85}
                                                        height={12}
                                                        sx={{
                                                            transform: "scale(1)",
                                                            zIndex: 1
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        </>))
                                    :
                                    productListData?.pages?.map((group: any, pageNum: number) =>
                                        group?.list?.map?.(
                                            (row: any, index: number) => {
                                                return (
                                                    <TableRow
                                                        tabIndex={-1}
                                                        key={`row-${(index + 1) * (pageNum + 1)}`}
                                                        className={classes.orderRow}
                                                    >
                                                        <TableCell align="center">
                                                            <Typography variant="h4">{row?.core_serial}</Typography>
                                                        </TableCell>
                                                        <TableCell
                                                            align="center"
                                                        >
                                                            <Typography
                                                                variant="subtitle1"> {row?.asds_landings}</Typography>

                                                        </TableCell>
                                                        <TableCell align="center"> <Typography variant="subtitle1"
                                                                                               className={classes.primaryText}>
                                                            {row?.reuse_count}
                                                        </Typography>
                                                        </TableCell>
                                                        <TableCell align="center"><Typography variant="subtitle1"
                                                                                              className={classes.hintColor}> {row?.rtls_attempts}</Typography></TableCell>
                                                        <TableCell align="center"><Typography variant="subtitle1"
                                                                                              className={classes.hintColor}>
                                                            {dateToMoment(row?.original_launch).format('YYYY/MM/DD')}
                                                        </Typography></TableCell>
                                                        <TableCell align="center">
                                                            <Button variant={"contained"} size={"small"}
                                                                    onClick={() => {
                                                                        loadDefailModal(row?.core_serial)
                                                                    }}>Learn More</Button>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            }))
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <VisibilitySensor
                        partialVisibility
                        onChange={(isVisible: boolean) => {
                            setInView(isVisible);
                        }}
                    >
                        <Stack flexDirection={"row"} justifyContent={"center"}
                               sx={{mt: 4, height: "100px", width: "100%"}}>
                            {isFetchingNextPage &&
                                <CircularProgress/>
                            }
                        </Stack>
                    </VisibilitySensor>
                </Paper>
            </Box>

        </Container>

    </>);
}
export default MainPage;