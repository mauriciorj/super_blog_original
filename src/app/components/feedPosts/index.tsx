import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { strSpaceToDashAndLowerCase } from '../../utils/string';

interface FeedPostsProps {
  feedPosts:
    | {
        id: string;
        order: number;
        slug: string;
        title: string;
        subtitle: string;
        imgUrl: string;
        topics: any[];
      }[]
    | null;
  title: string;
}

const FeedPosts: React.FC<FeedPostsProps> = ({ feedPosts, title }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [postsQtd, setPostsWtd] = useState(10);

  const handlerMorePost = () => {
    setPostsWtd(postsQtd + 10);
  };

  if (!feedPosts) return <>Loading...</>;

  return (
    <Grid item xs={12}>
      <Box width={1} sx={{ marginBottom: '15px' }} display="flex">
        <ListIcon sx={{ paddingTop: '4px', marginRight: '5px' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {t(title)}
        </Typography>
      </Box>
      {feedPosts.slice(0, postsQtd).map((item, index) => (
        <Card
          sx={{ display: 'flex', marginBottom: '10px' }}
          // eslint-disable-next-line react/no-array-index-key
          key={`card-${index}`}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '5px',
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: matches ? 'row' : 'column',
              }}
            >
              <Grid item xs={12} md={8} sx={{ paddingRight: '10px' }}>
                <Link
                  to={`/post/${item.slug}`}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Typography component="div" variant="h6" color="text.primary">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                  >
                    {item.subtitle}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Link to={`/post/${item.slug}`}>
                  <CardMedia
                    component="img"
                    image={item.imgUrl}
                    alt={item.title}
                  />
                </Link>
              </Grid>
            </CardContent>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="space-between"
              sx={{ paddingLeft: '15px', paddingRight: '15px' }}
            >
              <Box>
                <Stack direction="row" spacing={1}>
                  {item.topics.map((tp) => (
                    <Chip
                      component="a"
                      clickable
                      label={tp.topic}
                      href={`topic/${strSpaceToDashAndLowerCase(tp.topic)}`}
                      key={`chip-${strSpaceToDashAndLowerCase(tp.id)}`}
                    />
                  ))}
                </Stack>
              </Box>
              <Box sx={{ marginTop: '5px' }}>
                <FavoriteBorderIcon />
              </Box>
            </Grid>
          </Box>
        </Card>
      ))}{' '}
      <Box
        width={1}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          variant="outlined"
          onClick={handlerMorePost}
          sx={{
            paddingLeft: '20px',
            paddingRight: '20px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          {t('viewMorePosts')}
        </Button>
      </Box>
    </Grid>
  );
};

export default FeedPosts;
