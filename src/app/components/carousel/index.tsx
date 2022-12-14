/* eslint-disable */
import React from 'react';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

interface PostsProps {
  posts:
    | {
        id: string;
        order: number;
        slug: string;
        title: string;
        subtitle: string;
        imgUrl: string;
      }[]
    | null;
}

const Carousel: React.FC<PostsProps> = ({ posts }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  if (!posts) return <>'loading...'</>;
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {posts.map((item, idx) => (
        <SwiperSlide key={`${idx}-${item.title}`}>
          <Grid
            alignItems="center"
            display="flex"
            flexDirection={matches ? 'row' : 'column'}
            item
            xs={12}
            sx={{
              marginLeft: '35px',
              marginRight: '10px',
              marginBottom: matches ? '100px' : '0px',
            }}
          >
            <Grid item xs={12}>
              <Link
                to={`/post/${item.slug}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                <Typography
                  variant={matches ? 'h4' : 'h6'}
                  sx={{ marginBottom: '20px', fontWeight: 'bold' }}
                  color="text.primary"
                >
                  {item.title}
                </Typography>
                {matches && (
                  <Typography
                    variant={matches ? 'h6' : 'subtitle1'}
                    color="text.secondary"
                  >
                    {item.subtitle}
                  </Typography>
                )}
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link
                to={`/post/${item.slug}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  style={{
                    height: '90%',
                    maxWidth: '90%',
                  }}
                />
              </Link>
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
