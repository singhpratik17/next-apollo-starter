import client from "../apolloClient";

const apolloQuery = async (query) => {
    return await client.query({
        query
    });
}

export { apolloQuery }
