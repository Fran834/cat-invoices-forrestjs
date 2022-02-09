import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import ErrorBoundary from './components/ErrorBoundary'

export const Apollo = ({ children }) => {

  const client = new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        { children }
      </ErrorBoundary>
    </ApolloProvider>
  )
}