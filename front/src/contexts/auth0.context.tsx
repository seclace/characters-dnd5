import { Component, createContext, useContext } from 'react';
import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';

interface Auth0ContextValue {
  isAuthenticated?: boolean;
  user?: any;
  isLoading?: boolean;
  handleRedirectCallback?: () => void;
  getIdTokenClaims?: (...p: any) => Promise<{ __raw: string; }>;
  loginWithRedirect?: (...p: any) => any;
  getTokenSilently?: (...p: any) => any;
  logout: (...p: any) => any;
}

export const Auth0Context = createContext<Auth0ContextValue>({
  logout: p => {},
});
export const useAuth0 = () => useContext(Auth0Context);

const auth0Config = {
  domain: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
  client_id: `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
  redirect_uri: window.location.origin,
};

interface Auth0ProviderState {
  isLoading: boolean;
  isAuthenticated: boolean;
  auth0Client: any;
  user?: any;
}
export class Auth0Provider extends Component<{}, Auth0ProviderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      isAuthenticated: false,
      auth0Client: Auth0Client,
      user: null,
    };
  }

  componentDidMount() {
    this.initializeAuth0();
  }

  async initializeAuth0() {
    const auth0Client = await createAuth0Client(auth0Config);
    this.setState({ auth0Client });

    if (window.location.search.includes('code=')) {
      return this.handleRedirectCallback();
    }

    const isAuthenticated = await auth0Client.isAuthenticated();
    const user = isAuthenticated ? await auth0Client.getUser() : null;
    this.setState({ isAuthenticated, user, isLoading: false });
  }

  async handleRedirectCallback() {
    this.setState({ isLoading: true });
    await this.state.auth0Client.handleRedirectCallback();
    const user = await this.state.auth0Client.getUser();
    this.setState({ user, isAuthenticated: true, isLoading: false });
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  render() {
    const { auth0Client, isLoading, isAuthenticated, user } = this.state;
    const { children } = this.props;

    const configObject = {
      isLoading,
      isAuthenticated,
      user,
      loginWithRedirect: (...p: any) => auth0Client.loginWithRedirect(...p),
      getTokenSilently: (...p: any) => auth0Client.getTokenSilently(...p),
      getIdTokenClaims: (...p: any) => auth0Client.getIdTokenClaims(...p),
      logout: (...p: any) => auth0Client.logout(...p)
    };

    return <Auth0Context.Provider value={configObject}>{children}</Auth0Context.Provider>;
  }
}
