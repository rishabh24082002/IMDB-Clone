import React from 'react'
import { useState,useEffect} from 'react';
import Header from '../components/headers/Header'
import { categoryofMovies } from '../services/api';
import { Box ,styled,Typography,Divider} from '@mui/material';
import { TOPRATED_API_URL,POPULAR_API_URL,UPCOMING_API_URL,type } from '../constants/constant';

import { useLocation } from 'react-router-dom';

import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import MovieList from '../components/MovieList';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const StyledBanner=styled('img')({
    height:450,
    width:'100%'
})

const Component = styled(Box)`
    width: 83%;
    margin: auto;
`
const Container = styled(Box)`
    background: #F5F5F5;
    text-align: left;
    padding: 10px;
`


const CategoryMovie = () => {

    const [movies,setMovies]=useState([]);

    const{search}=useLocation();

    useEffect(()=>{
        const getData=async(API_URL)=>{
            let response=await categoryofMovies(API_URL);
            setMovies(response.results);
        }

        let API_URL='';
        if(search.includes('popular')){
          API_URL=POPULAR_API_URL;

        }
        else if(search.includes('upcoming')){
          API_URL=UPCOMING_API_URL;

        }
        else if(search.includes('toprated')){
          API_URL=TOPRATED_API_URL;

        }
        getData(API_URL);
    },[search])
  return (
    <>
      <Header/>
      <Component>
      <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      showDots={false}
      slidesToSlide={1}>
        {
            movies.map(movie => (
                <>
            <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="banner"/>
            {/* <Title>{movie.original_title}</Title> */}
            </>
          ))
        }
      </Carousel>
      <Container>
        <Typography>IMDB charts</Typography>
        
        <Typography variant="h4">{type[search.split('=')[1]]} Movies</Typography>
        <Typography style={{ fontSize: 12, margin: 5 }}>As determined by IMDb Users</Typography>
        <Divider/>
        <MovieList movies={movies}/>
      </Container>   
    </Component>
    </>
  )
}

export default CategoryMovie
