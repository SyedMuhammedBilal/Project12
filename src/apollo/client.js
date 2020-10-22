import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://angry-mcnulty-65dd3e.netlify.app/.netlify/functions/bookmarks',
        fetch
    }),
    cache: new InMemoryCache()
}); 