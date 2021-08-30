import { apolloQuery } from '../utils/apolloHelpers';
import { GET_COUNTRIES, GET_TEST_DATA } from '../operations/temp/queries';
import { Button, Grid, Typography } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from '../operations/temp/mutations';
import useRefresh from '../hooks/useRefresh';

export default function Home({ countries }) {
  const refresh = useRefresh();

  const [createNewTest] = useMutation(CREATE_TEST, {
    onError: (error) => {
      console.log('Error', error);
    },
    onCompleted: (data) => {
      refresh();
    },
  });

  const handleCreateTest = () => {
    return createNewTest({
      variables: {
        name: 'Random test name 7',
        isActive: false,
      },
    });
  };

  return (
    <Grid container justifyContent="space-around" direction="row">
      {countries.map((country) => (
        <Grid container justifyContent="space-around" item key={country.id}>
          <Typography variant="body1">{country.id}</Typography>
          <Typography variant="h1">{country.name}</Typography>
          <Typography variant="h1">{country.isActive?.toString()}</Typography>
        </Grid>
      ))}

      <Button variant="contained" onClick={() => handleCreateTest()}>
        Create Test Data
      </Button>
    </Grid>
  );
}

export async function getServerSideProps() {
  const { data, error } = await apolloQuery(GET_TEST_DATA);

  return {
    props: {
      countries: data.tests,
    },
  };
}
