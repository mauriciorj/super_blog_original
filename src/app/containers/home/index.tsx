import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Box, Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import Carousel from '../../components/carousel';
import TrendingPosts from '../../components/trendingPosts';
import FeedPosts from '../../components/feedPosts';
import TopicsBox from '../../components/topicsBox';

import {
  setCarouselPosts,
  setFeedPosts,
  setTopics,
  setTrendingPosts,
} from '../posts/actions';

import {
  makeSelectCarouselPosts,
  makeSelectFeedPosts,
  makeSelectTopics,
  makeSelectTrendingPosts,
} from '../posts/selector';

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [carouselPostsList, setCarouselPostsList] = useState<any>([]);
  const [feedPostsList, setFeedPostsList] = useState<any>([]);
  const [trendingPostsList, setTrendingPostsList] = useState<any>([]);
  const [topicsList, setTopicsList] = useState<any>([]);

  const getCarouselPosts = useSelector(makeSelectCarouselPosts());
  const getFeedPosts = useSelector(makeSelectFeedPosts());
  const getTopics = useSelector(makeSelectTopics());
  const getTrendingPosts = useSelector(makeSelectTrendingPosts());

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [searchParams] = useSearchParams();
  const getFeedPage = searchParams.get('feedPage');

  useEffect(() => {
    if (!getFeedPosts) dispatch(setFeedPosts(getFeedPage));
    if (!getCarouselPosts) dispatch(setCarouselPosts());
    if (!getTopics) dispatch(setTopics());
    if (!getTrendingPosts) dispatch(setTrendingPosts());
  }, []);

  useEffect(() => {
    if (getCarouselPosts) {
      setCarouselPostsList([...getCarouselPosts]);
    }
    if (getFeedPosts) {
      setFeedPostsList([...getFeedPosts]);
    }
    if (getTrendingPosts) {
      setTrendingPostsList([...getTrendingPosts]);
    }
    if (getTopics) {
      setTopicsList([...getTopics]);
    }
  }, [getCarouselPosts, getFeedPosts, getTrendingPosts, getTopics]);

  return (
    <Grid>
      <Helmet>
        <title>{t('seoHomePageTitle')}</title>
        <meta name="application-name" content={t('seoHomePageTitle')} />
        <meta name="description" content={t('seoHomePageDescription')} />
        <meta name="keywords" content={t('seoHomePageKeywords')} />
        <meta name="msapplication-TileColor" content="#FFF"></meta>
        <meta name="msapplication-TileImage" content={t('tileImage')} />
        <meta property="og:description" content={t('seoHomePageDescription')} />
        <meta property="og:image" content={t('ogImage')} />
        <meta property="og:site_name" content={t('siteName')} />
        <meta property="og:title" content={t('seoHomePageTitle')} />
        <meta property="og:url" content={t('seoOgUrl')} />
      </Helmet>
      <Box width={1} sx={{ marginTop: '20px' }}>
        <Carousel posts={carouselPostsList} />
      </Box>
      <Divider sx={{ marginTop: '20px' }} />
      <Box width={1} sx={{ marginTop: '10px' }}>
        <TrendingPosts trendingPosts={trendingPostsList} />
      </Box>
      <Divider sx={{ marginTop: '30px' }} />
      <Grid
        container
        display="flex"
        flexDirection={matches ? 'row' : 'column'}
        justifyContent="flex-start"
        sx={{ marginTop: '10px' }}
      >
        <Grid item order={{ xs: 2, sm: 1, md: 1 }} xs={matches ? 8 : 12}>
          {!matches && (
            <Divider sx={{ marginBottom: '10px', marginTop: '20px' }} />
          )}
          <FeedPosts feedPosts={feedPostsList} title="feedPostsTitle" />
        </Grid>
        <Grid
          item
          order={{ xs: 1, sm: 2, md: 2 }}
          xs={matches ? 4 : 12}
          sx={{
            paddingLeft: matches ? '50px' : '0px',
            marginBottom: matches ? '0px' : '10px',
          }}
        >
          <TopicsBox topics={topicsList} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
