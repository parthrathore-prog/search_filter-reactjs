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
        height:'100vh',
        backgroundColor:'white',
        position:'absolute',
        left:0,
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
    const [name, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
      };

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
            <Grid container spacing={0} direction="row" style={{position:'relative'}}>
                <Grid item xs={12} md={2} style={{position:'relative',left:'0px'}}>
                    <Box style={{backgroundColor:'white',height:"100%"}}>
                            hi
                        </Box>
                </Grid>
                <Grid item md={10}>
                <Container maxWidth='lg'>
                    <Grid container spacing={2} direction="row" justify="center" alignItems="flex-start">
                        {/* <Grid item md md={2}>
                            <Box position="fixed" width="200px" left={0} style={{backgroundColor:'white'}}>
                                <Typography variant='h1' color="primary">HI</Typography>
                            </Box>
                        </Grid> */}

                        <Grid item xs={12}>
                            <Typography variant="h5" color="primary" style={{letterSpacing:'3px',padding:'10px 0px 30px 0px',fontWeight:'bolder',textTransform:'uppercase'}}>
                                Search <font color="black">files</font>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={5} style={{position:'relative'}}>
                            <Card style={{minHeight:'560px', paddingBottom:'50px'}} raised>
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
                                        <Table padding="checkbox" style={{width:'300px'}}>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        <FormControlLabel control={<Checkbox name="match_case" />} label="All Formats"/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormControlLabel control={<Checkbox name="match_case" />} label="Image"/>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <FormControlLabel control={<Checkbox name="match_case" />} label="Video"/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormControlLabel control={<Checkbox name="match_case" />} label="Audio"/>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
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
                                                <Select labelId="signature-label" value={name} onChange={handleChange}>
                                                    <MenuItem value={1}>Garima Goyal</MenuItem>
                                                    <MenuItem value={2}>Akash Pandey</MenuItem>
                                                    <MenuItem value={3}>Bhoomi Pratap</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </FormGroup>
                                    </form>
                                    <Button variant="contained" color="primary" className={classes.button}>Apply Filters</Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={7} style={{position:'relative'}}>
                            <Card style={{minHeight:'560px',padding:'0px 50px 50px 50px'}} raised>
                                <CardContent>
                                    <Typography variant="h6">
                                        Search Results
                                    </Typography>
                                    <Table padding='checkbox' style={{width:'400px',margin:'auto',marginTop:'10px'}}>
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
                                                return(
                                                    <TableRow>
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
            </Grid>
            </Grid>
            </div>

        </React.Fragment>
    )
}

export default App;