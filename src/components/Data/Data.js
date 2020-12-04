import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
        maxWidth: "800px",
        margin: "50px auto",
        height: "500px"
    },
    link: {
        textDecoration: "none"
    }
}))

export default function Data({ data }) {
    const styles = useStyles()
    const location = useLocation()
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: "trackingTag", headerName: "Tag", width: 70 },
        { field: "origin", headerName: "Origin", width: 150 },
        { field: "type", headerName: "Sakstype", width: 100 },
        { field: "device", headerName: "Device", width: 100 },
        {
            field: "link", headerName: "Link", width: 200, renderCell(params) {
                return (
                    <Link className={styles.link} to={`/${location.pathname.replace("/", "")}/${params.value}`}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                        >
                            Open
                        </Button>
                    </Link>
                )
            },
        }
    ];

    return (
        <div className={styles.container}>
            {data.leads !== undefined ? <DataGrid
                rows={
                    data.leads.map((item, idx) => {
                        return {
                            id: idx,
                            trackingTag: item.trackingTag,
                            origin: item.origin,
                            type: item.type,
                            device: item.device || "unknown",
                            link: item._key
                        }
                    })
                }
                columns={columns}
                pageSize={5}
                checkboxSelection /> : <h2>No data</h2>}
        </div>
    );
}