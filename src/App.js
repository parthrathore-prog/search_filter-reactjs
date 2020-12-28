import { AppBar,Box,Button, Container, Toolbar, Typography, Grid, Card, CardContent, TextField, Checkbox, Select, MenuItem,InputLabel,FormControl,FormControlLabel,FormGroup, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { sizing } from '@material-ui/system';
import React from 'react';
import './App.css';

const useStyles= makeStyles((theme)=>({
    root:{
        flexGrow:1,
        width:'100%',
    },
    appbar:{
        alignItems:'center',
    },
    button:{
        position:'absolute',
        right:'30px',
        bottom:'30px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
      },
    menubar:{
        // minWidth:"10%",
        // maxWidth:'10%',
        width:'10%',
        backgroundColor:'white',
        position:'fixed',

    }
}))

// const theme = createMuiTheme({
//     overrides: {
//       MuiTableCell: {
//         root: {
//           paddingTop: 0,
//           paddingBottom: 0,
//           "&:last-child": {
//             paddingRight: 5
//           }
//         }
//       }
//     }
//   });

function App(props){
    const classes=useStyles();
    const counter=[1,2,3,4,5,6,7,8];
    return(
        <React.Fragment>
            <div className={classes.root}>
            <AppBar className={classes.appbar} position="relative">
                <Toolbar variant="dense" >
                    <Typography align="center">eLearning Curation Tool
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* <Box className={classes.menubar}>
                <Typography variant="h1">
                    Hi
                    Hi
                </Typography>
            </Box> */}
            {/* <Container style={{maxWidth:'min(90%,1280px)'}}> */}
            <Container maxWidth="lg">
                <Grid container spacing={2} direction="row" justify="center" alignItems="flex-start">
                    <Grid item xs={12} md={10}>
                        <Typography variant="h5" color="primary" style={{letterSpacing:'3px',padding:'10px 0px 30px 0px',fontWeight:'bolder',textTransform:'uppercase'}}>
                            Search <font color="black">files</font>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} style={{position:'relative'}}>
                        <Card style={{minHeight:'560px',paddingBottom:'50px'}} raised>
                            <CardContent>
                                <Typography variant="h6">
                                    Search
                                </Typography>
                                <form>
                                    <FormGroup row style={{marginTop:'10px'}}>
                                        <TextField type="search" label="Keyword" variant="outlined" style={{marginRight:'10px'}}/>
                                        <FormControlLabel control={<Checkbox name="match_case" />} label="Exact Match"/>
                                    </FormGroup>
                                    <Typography variant='body1' style={{marginTop:'40px'}}>
                                        Search In
                                    </Typography>
                                    <FormGroup row>
                                        <FormControlLabel control={<Checkbox name="match_case" />} label="All Formats"/>
                                        <FormControlLabel control={<Checkbox name="match_case" />} label="Image"/>
                                    </FormGroup>
                                    <FormGroup row>
                                        <FormControlLabel control={<Checkbox name="match_case" />} label="Video"/>
                                        <FormControlLabel control={<Checkbox name="match_case" />} label="Audio"/>
                                    </FormGroup>
                                    <hr style={{margin:'40px 0px 0px 0px'}}></hr>
                                    <Typography variant='body1' style={{marginTop:'10px'}}>
                                        Additional Features
                                    </Typography>
                                    <FormGroup row style={{marginTop:'10px'}}>
                                        <TextField type="search" label="File Name" variant="outlined" style={{marginRight:'10px'}}/>
                                        <FormControlLabel control={<Checkbox name="match_case" />} label="Exact Match"/>
                                    </FormGroup>
                                    <Typography variant='body1' style={{marginTop:'10px'}}>Created By</Typography>
                                    <FormGroup row>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="signature-label">
                                                Created By
                                            </InputLabel>
                                            <Select labelId="signature-label">
                                                <MenuItem>Garima Goyal</MenuItem>
                                                <MenuItem>Akash Pandey</MenuItem>
                                                <MenuItem>Bhoomi Pratap</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </FormGroup>
                                </form>
                                <Button variant="contained" color="primary" className={classes.button}>Apply Filters</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} style={{position:'relative'}}>
                        <Card style={{minHeight:'560px',paddingBottom:'50px'}} raised>
                            <CardContent>
                                <Typography variant="h6">
                                    Search Results
                                </Typography>
                                <Table padding='checkbox' style={{marginTop:'10px'}}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>&nbsp;</TableCell>
                                            <TableCell>File Name</TableCell>
                                            <TableCell>File Type</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {counter.map(()=>{
                                            return(         <TableRow>
                                                <TableCell><FormControlLabel control={<Checkbox name="check"/>}/></TableCell>
                                                <TableCell>Post Course.pptx</TableCell>
                                                <TableCell>PPT</TableCell>
                                                <TableCell>👁</TableCell>
                                                </TableRow>)
                                            })}
                                    </TableBody>
                                </Table>
                                <Button variant="contained" color="primary" className={classes.button}>Continue</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default App;