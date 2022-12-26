import React from 'react';
import {ChangeBusinesWrapper} from "./ChangeBusines.style";
import {Button} from "@mui/material";
import {Settings} from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    paper: {
        background: "white",
        color: "#000",
        fontSize:18,
        fontFamily:"Inter",

    },
    input: {
        color: "#fff",
        fontSize:18,
        fontFamily:"Inter",
        borderColor:"#000",
        borderWidth:10,
        backgroundColor: "transparent",
        borderRadius: 40,
        "&:focus": {
            borderRadius: 40,
            borderColor: "#000",
            background: "rgba(0,0,0,0)"
        },
        '&:before': {
            borderColor: "red",
        },
        '&:after': {
            borderColor: "green",
        }
    }
}));

const ChangeBusines = () => {
    const classes = useStyles();
    const [project, setProject] = React.useState('');
    const [davr, setDavr] = React.useState('');

    const handleChangeProject = (event) => {
        setProject(event.target.value);
    };
    const handleChangeDavr = (event) => {
        setDavr(event.target.value);
    };

    return (
        <ChangeBusinesWrapper>
            <div className="wrap">
                <h3>Admin</h3>
                <div className="selects">
                    <FormControl variant="filled" fullWidth className={classes.formControl}>
                        <InputLabel style={{color:"#fff"}} id="demo-simple-select-label1">Proyektlar</InputLabel>
                        <Select
                            MenuProps={{
                                classes: {
                                    paper: classes.paper
                                }
                            }}
                            inputProps={{
                                classes: {
                                    root: classes.input
                                }
                            }}
                            labelId="demo-simple-select-label1"
                            id="demo-simple-select1"
                            value={project}
                            label="Proyekt"
                            onChange={handleChangeProject}
                        >
                            <MenuItem value={1}>Metan</MenuItem>
                            <MenuItem value={2}>Propan</MenuItem>
                            <MenuItem value={3}>Benzin</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" fullWidth className={classes.formControl}>
                        <InputLabel style={{color:"#fff"}} id="demo-simple-select-label2">Davr</InputLabel>
                        <Select
                            MenuProps={{
                                classes: {
                                    paper: classes.paper
                                }
                            }}
                            inputProps={{
                                classes: {
                                    root: classes.input
                                }
                            }}
                            labelId="demo-simple-select-label2"
                            id="demo-simple-select"
                            value={davr}
                            onChange={handleChangeDavr}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button  className="selec" style={{color:"#fff"}} variant="outlined" startIcon={<Settings />}>
                        Sozlamalar
                    </Button>
                </div>
            </div>
        </ChangeBusinesWrapper>
    );
};

export default ChangeBusines;