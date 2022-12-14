import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
// import { strSpaceToDashAndLowerCase } from '../../utils/string';
import { makeSelectPostList } from '../posts/selector';
import { setPostList } from '../posts/actions';
import LoadingContent from '../../components/loadingContent';

const Post = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const theme = useTheme();

  const { id } = useParams();

  const post = useSelector(makeSelectPostList(id));

  useEffect(() => {
    if (!post) {
      dispatch(setPostList(id));
    }
  }, [post]);

  if (!post) return <LoadingContent />;

  return (
    <Grid item xs={12}>
      <Helmet>
        <title>{post.title}</title>
        <meta name="application-name" content={post.title} />
        <meta name="description" content={post.seoDescription} />
        <meta name="keywords" content="KEYWORDS" />
        <meta name="msapplication-TileColor" content="#FFF"></meta>
        <meta name="msapplication-TileImage" content={t('tileImage')} />
        <meta
          property="og:description"
          content={t('seoContactUsPageDescription')}
        />
        <meta property="og:image" content={t('ogImage')} />
        <meta property="og:site_name" content={t('siteName')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:url" content={t('seoOgUrl')} />
      </Helmet>
      <Grid container item xs={12}>
        <Grid
          item
          xs={9}
          paddingRight="20px"
          paddingTop="30px"
          paddingBottom="40px"
          minHeight="100%"
          sx={{
            borderRight: `1px solid ${theme.palette.greyAccessible.light}`,
          }}
        >
          <Grid item xs={12}>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="right"
              paddingBottom="20px"
            >
              <Box>
                <FacebookIcon
                  sx={{ color: theme.palette.greyAccessible.light }}
                />
                <InstagramIcon
                  sx={{ color: theme.palette.greyAccessible.light }}
                />
                <LinkedInIcon
                  sx={{ color: theme.palette.greyAccessible.light }}
                />
                <TwitterIcon
                  sx={{ color: theme.palette.greyAccessible.light }}
                />
              </Box>
              <Box sx={{ marginLeft: '20px' }}>
                <FavoriteBorderIcon />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">{post?.title}</Typography>
            </Grid>
            <Grid item xs={12} marginTop="20px">
              <Typography variant="subtitle1">{post?.content}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="left"
              paddingTop="20px"
            >
              <Box>
                <FacebookIcon
                  sx={{ color: theme.palette.greyAccessible.light }}
                />
                <InstagramIcon
                  sx={{ color: theme.palette.greyAccessible.light }}
                />
                <LinkedInIcon
                  sx={{ color: theme.palette.greyAccessible.light }}
                />
                <TwitterIcon
                  sx={{ color: theme.palette.greyAccessible.light }}
                />
              </Box>
              <Box sx={{ marginLeft: '20px' }}>
                <FavoriteBorderIcon />
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: '30px', marginBottom: '20px' }} />
          <Grid item xs={12} textAlign="center">
            <Typography variant="h6">{t('notSubscriber')}</Typography>
            <Button
              variant="contained"
              color="success"
              sx={{
                paddingLeft: '30px',
                paddingRight: '30px',
                paddingTop: '15px',
                paddingBottom: '15px',
                marginTop: '20px',
                marginBottom: '20px',
              }}
              size="large"
              startIcon={<AddIcon />}
            >
              {t('subscribeCTA')}
            </Button>
          </Grid>
          <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
          {/* <Grid item xs={12}>
            <FeedPosts feedPosts={getRelatedPosts} title="otherPosts" />
          </Grid> */}
        </Grid>
        <Grid item xs={3} paddingLeft="20px" paddingTop="30px">
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
              {t('otherTopicsToPost')}
            </Typography>
            {/* <Grid item xs={12} display="flex" flexWrap="wrap">
              {getOtherTopics.map((topic, idx) => (
                <Link
                  to={`/topic/${strSpaceToDashAndLowerCase(topic)}`}
                  style={{
                    textDecoration: 'none',
                  }}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${idx}-${topic}`}
                >
                  <Box
                    sx={{
                      paddingLeft: '8px',
                      paddingRight: '8px',
                      marginRight: '8px',
                      marginBottom: '8px',
                      border: '1px solid #333',
                      borderRadius: '3px',
                    }}
                  >
                    <Typography
                      noWrap
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      {topic}
                    </Typography>
                  </Box>
                </Link>
              ))}
            </Grid> */}
          </Grid>
          <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
          <Grid item xs={12} textAlign="center">
            <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
              {t('notSubscriber')}
            </Typography>
            <Button
              variant="outlined"
              color="success"
              size="small"
              startIcon={<AddIcon />}
              sx={{
                paddingTop: '7px',
                paddingRight: '10px',
                paddingBottom: '5px',
              }}
            >
              {t('subscribeCTA')}
            </Button>
          </Grid>
          <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
              {t('morePosts')}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Post;
