import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, useTheme } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';

interface TrendingPostsProps {
  trendingPosts:
    | {
        id: string;
        order: number;
        slug: string;
        title: string;
      }[]
    | null;
}

const TrendingPosts: React.FC<TrendingPostsProps> = ({ trendingPosts }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  if (!trendingPosts) return <>Loading...</>;
  return (
    <Grid item xs={12}>
      <Grid
        item
        xs={12}
        sx={{ marginTop: '10px', marginBottom: '15px' }}
        display="flex"
      >
        <WhatshotIcon sx={{ paddingTop: '3px', marginRight: '5px' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {t('trendingPostsTitle')}
        </Typography>
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {trendingPosts.map((item, idx) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            display="flex"
            flexDirection="row"
            alignItems="center"
            // eslint-disable-next-line react/no-array-index-key
            key={`${idx}-${item.title}`}
          >
            <Grid sx={{ marginRight: '10px' }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold' }}
                color="primary"
              >
                {item.order}
              </Typography>
            </Grid>
            <Grid>
              <Link
                to={`/post/${item.slug}`}
                style={{
                  color: theme.palette.greyAccessible.main,
                  textDecoration: 'none',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="subtitle1">{item.title}</Typography>
              </Link>
            </Grid>
          </Grid>
        ))}{' '}
      </Grid>
    </Grid>
  );
};

export default TrendingPosts;
