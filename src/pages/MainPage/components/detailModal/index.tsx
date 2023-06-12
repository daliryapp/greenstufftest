import {FC} from "react";
import {
    Box,
    Paper,
    Grid,
    Skeleton,
    Typography,
    Stack
} from "@mui/material";
import useDetailModalStyle from './useDetailModal.style';
import {useGetDetail} from "_hooks/mainPage/mainPage.services";

interface IDetailModal {
    serialCode: string;
}

const DetailModal: FC<IDetailModal> = ({serialCode}: IDetailModal) => {
    const {data, isLoading} = useGetDetail(serialCode);
    const classes = useDetailModalStyle();
    return (<Box className={classes.detailBox}>
        <Paper sx={{
            height: '100%',
            p: 4
        }}>
            <Grid container spacing={4}>
                <Grid
                    item
                    md={4}
                    xs={12}
                >
                    {isLoading ?
                        <Skeleton
                            animation="wave"
                            width={65}
                            height={48}

                        />
                        :
                        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                            <Typography variant={"h5"} fontWeight="800">
                                core_serial:
                            </Typography>
                            <Typography variant={"body2"} fontWeight="400">
                                {data.core_serial}
                            </Typography>
                        </Stack>

                    }
                </Grid>
                <Grid
                    item
                    md={4}
                    xs={12}
                >
                    {isLoading ?
                        <Skeleton
                            animation="wave"
                            width={85}
                            height={12}
                        />
                        :
                        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                            <Typography variant={"h5"} fontWeight="800">
                                asds_attempts :
                            </Typography>
                            <Typography variant={"body2"} fontWeight="400">
                                {data.asds_attempts}
                            </Typography>
                        </Stack>
                    }
                </Grid>
                <Grid
                    item
                    md={4}
                    xs={12}
                >
                    {isLoading ?
                        <Skeleton
                            animation="wave"
                            width={85}
                            height={12}
                        />
                        :
                        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                            <Typography variant={"h5"} fontWeight="800">
                                asds_landings :
                            </Typography>
                            <Typography variant={"body2"} fontWeight="400">
                                {data.asds_landings}
                            </Typography>
                        </Stack>
                    }
                </Grid>
                <Grid
                    item
                    md={4}
                    xs={12}
                >
                    {isLoading ?
                        <Skeleton
                            animation="wave"
                            width={85}
                            height={12}
                        />
                        :
                        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                            <Typography variant={"h5"} fontWeight="800">
                                reuse_count:
                            </Typography>
                            <Typography variant={"body2"} fontWeight="400">
                                {data.reuse_count}
                            </Typography>
                        </Stack>
                    }
                </Grid>
                <Grid
                    item
                    md={4}
                    xs={12}
                >
                    {isLoading ?
                        <Skeleton
                            animation="wave"
                            width={85}
                            height={12}
                        />
                        :
                        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                            <Typography variant={"h5"} fontWeight="800">
                                rtls_attempts:
                            </Typography>
                            <Typography variant={"body2"} fontWeight="400">
                                {data.rtls_attempts}
                            </Typography>
                        </Stack>
                    }
                </Grid>
                <Grid
                    item
                    md={4}
                    xs={12}
                >
                    {isLoading ?
                        <Skeleton
                            animation="wave"
                            width={85}
                            height={12}
                        />
                        :
                        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                            <Typography variant={"h5"} fontWeight="800">
                                rtls_landings :
                            </Typography>
                            <Typography variant={"body2"} fontWeight="400">
                                {data.rtls_landings}
                            </Typography>
                        </Stack>
                    }
                </Grid>
                <Grid
                    item
                    md={4}
                    xs={12}
                >
                    {isLoading ?
                        <Skeleton
                            animation="wave"
                            width={85}
                            height={12}
                        />
                        :
                        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                            <Typography variant={"h5"} fontWeight="800">
                                status:
                            </Typography>
                            <Typography variant={"body2"} fontWeight="400">
                                {data.status}
                            </Typography>
                        </Stack>
                    }
                </Grid>
                <Grid
                    item
                    md={4}
                    xs={12}
                >
                    {isLoading ?
                        <Skeleton
                            animation="wave"
                            width={85}
                            height={12}
                        />
                        :
                        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                            <Typography variant={"h5"} fontWeight="800">
                                water_landing :
                            </Typography>
                            <Typography variant={"body2"} fontWeight="400">
                                {data.water_landing ? 'Yes' : "No"}
                            </Typography>
                        </Stack>
                    }
                </Grid>
                <Grid
                    item
                    md={12}
                    xs={12}
                >
                    {isLoading ?
                        <>
                            <Skeleton
                                animation="wave"
                                width={'100%'}
                                height={12}
                            />
                            <Skeleton
                                animation="wave"
                                width={'90%'}
                                height={12}
                            />
                            <Skeleton
                                animation="wave"
                                width={'95%'}
                                height={12}
                            />
                        </>
                        :
                        <Stack flexDirection={"row"} alignItems={"start"} gap={1}>
                            <Typography variant={"h5"} fontWeight="800">
                                details:
                            </Typography>
                            <Typography variant={"body2"} fontWeight="400">
                                {data.details}
                            </Typography>
                        </Stack>
                    }
                </Grid>
            </Grid>
        </Paper>
    </Box>);
}
export default DetailModal;