import { Box, Button, Pagination, Paper, TextField, Typography, Grid } from "@mui/material";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { marvelActionCreators, State } from "../../store";
import MarvelCard, { Result } from "../../components/Marvel/MarvelCard";

type marvelReduxType = {
    attributionHTML: string;
    attributionText: string;
    code: number;
    copyright: string;
    data: {
        id: number
        offset: number
        limit: number
        total: number
        count: number
        results: Result[]
    };
    etag:  string;
    status: string;
}

export default function Marvel() {
   const [value, setValue] = useState<string>('');
   const [page, setPage] = useState<number>(1);

   const marvelRedux: marvelReduxType = useSelector(( { marvel }:State )=>marvel);

    const dispatch = useDispatch();
    const {getCharacters} = bindActionCreators(marvelActionCreators, dispatch);

    function handleClick() {
        getCharacters(value, page);
    };

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        getCharacters('', value);
    };
    
    return (
        <>
            <Grid container> 
                <Grid item xs={12}>
                    <Box display='flex'  justifyContent='center' alignItems='center' marginBottom='1.5rem'>
                        <Paper sx={{
                            width:'650px', 
                            padding: '24px', 
                            borderRadius: '24px', 
                            display: 'flex', 
                            flexDirection:'column', 
                            gap: '8px'}}>
                            <Typography align='center' variant='h6'>Marvel Heroes</Typography>
                            <Box display='flex' gap='1rem'>
                                <TextField 
                                    value={value} 
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValue(e.target.value)}} 
                                    fullWidth
                                    />
                                <Button onClick={handleClick}  variant='contained' fullWidth >Search</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
              
                {  Object.keys(marvelRedux).length !== 0  && 
                    <>
                        {marvelRedux.data.results.map((res,index)=>{
                            return(
                                <Grid key={index} item xs={4} sx={{backgroundColor:'#b4c6e8', border:'4px solid brown', borderRadius:'10px', paddingBottom:"10px"}}>
                                    <MarvelCard key={res.name} name={res.name} 
                                    description={res.description?res.description:'Description not available'} 
                                    thumbnail={res.thumbnail} id={res.id} comics={res.comics}
                                />
                                </Grid>
                            );
                        })}


                        <Grid spacing={12} display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginBottom='1.5rem'>  
                            <Pagination sx={{width:'800px',
                                '& .MuiPagination-ul':{justifyContent: 'space-between'}}} 
                                count={Math.ceil(marvelRedux.data.total/marvelRedux.data.limit)} 
                                page={page} 
                                onChange={handleChange}
                                size='large' />
                            <Box sx={{display: 'flex', justifyContent: 'center'}} 
                            dangerouslySetInnerHTML={{__html: marvelRedux.attributionHTML}} /> 
                        </Grid> 
                    </>
                }

            </Grid>
            
        </>
    );
}