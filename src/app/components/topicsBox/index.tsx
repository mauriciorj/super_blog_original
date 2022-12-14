import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import TagIcon from '@mui/icons-material/Tag';
import { strSpaceToDashAndLowerCase } from '../../utils/string';

interface TopicsProps {
  topics: any[] | null;
}

const TopicsBox: React.FC<TopicsProps> = ({ topics }) => {
  const [iscomponentSticky, setIscomponentSticky] = useState<any>(true);
  const [componentTop, setComponentTop] = useState<any>(null);

  // const theme = useTheme();
  const { t } = useTranslation();
  const inputRef = useRef<any>(null);

  const windowScroll = () => {
    if (window.scrollY >= componentTop) {
      setIscomponentSticky(true);
    } else if (window.scrollY < componentTop) {
      setIscomponentSticky(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    setComponentTop(inputRef?.current?.offsetTop);
  }, [inputRef]);

  useEffect(() => {
    window.addEventListener('scroll', windowScroll);
    return () => {
      window.removeEventListener('scroll', windowScroll);
    };
  }, []);

  if (!topics) return <>Loading...</>;

  return (
    <Grid
      item
      xs={12}
      position={iscomponentSticky ? 'sticky' : 'relative'}
      sx={{ top: iscomponentSticky ? '10px' : componentTop }}
      ref={inputRef}
      flexWrap="wrap"
    >
      <Box width={1} display="flex" sx={{ marginBottom: '15px' }}>
        <TagIcon sx={{ paddingTop: '4px', marginRight: '5px' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {t('tagBoxTitle')}
        </Typography>
      </Box>
      <Grid item xs={12} display="flex" flexWrap="wrap">
        {topics.map((item) => (
          <Link
            to={`/topic/${strSpaceToDashAndLowerCase(item.topic)}`}
            style={{
              textDecoration: 'none',
            }}
            key={item.id}
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
              <Typography noWrap variant="subtitle1" color="text.secondary">
                {item.topic}
              </Typography>
            </Box>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default TopicsBox;
