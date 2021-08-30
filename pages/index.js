import { apolloQuery } from '../utils/apolloHelpers';
import { GET_COUNTRIES } from '../operations/temp/queries';
import { Grid, Typography } from '@material-ui/core';

export default function Home({ countries }) {
  return (
    <Grid container justifyContent="space-around" direction="row">
      {countries.map((country) => (
        <Grid item key={country.code}>
          <Typography variant="body1">{country.code}</Typography>
          <Typography variant="h1">{country.emoji}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export async function getServerSideProps() {
  const { data, error } = await apolloQuery(GET_COUNTRIES);

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
