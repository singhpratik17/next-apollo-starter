import client from "../apolloClient";
import {GET_COUNTRIES} from "../operations/temp/queries";


export default function Home({countries}) {
  return (
    <div>
      {countries.map((country) => (
          <div key={country.code}>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const { data, error } = await client.query({
    query: GET_COUNTRIES
  });

  console.log(data, error)

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
