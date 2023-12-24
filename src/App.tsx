import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
	ErrorBoundary as GlobalErrorBoundary,
} from "react-error-boundary";
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalErrorFallback from './utils/fallback/gloabalErrorFallback';

import Intro from '@/pages/intro/IntroPage';
import Main from '@/pages/main/Main';
import MyPage from '@/pages/my-page/MyPage';
import PortfolioDetail from '@/pages/portfolio-detail/PortfolioDetail';
import PortfolioEdit from '@/pages/portfolio-edit/PortfolioEdit';
import SignIn from '@/pages/signIn/SignIn';
import SignUp from '@/pages/signUp/SignUp';
import { store } from '@/redux/store';
import { ROUTE_PATH } from '@/utils/path';

export const persistor = persistStore(store);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			throwOnError: true,
			retry: 0,
		},
		mutations: {
      throwOnError: false,
      retry: 0,
    },
	}
})

function App() {
  return (
		<GlobalErrorBoundary FallbackComponent={GlobalErrorFallback}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<QueryClientProvider client={queryClient}>
						<BrowserRouter>
							<Routes>
								<Route path={ROUTE_PATH.INTRO} element={<Intro/>}></Route>
								<Route path={ROUTE_PATH.MAIN} element={<Main/>}></Route>
								<Route path={ROUTE_PATH.SIGNUP} element={<SignUp/>}></Route>
								<Route path={ROUTE_PATH.SIGNIN} element={<SignIn/>}></Route>
								<Route path={ROUTE_PATH.MYPAGE} element={<MyPage/>}></Route>
								<Route path={ROUTE_PATH.PORTFOLIO} element={<PortfolioDetail/>}></Route>
								<Route path={ROUTE_PATH.PORTFOLIO_EDIT} element={<PortfolioEdit/>}></Route>
							</Routes>
						</BrowserRouter>
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</PersistGate>
			</Provider>
		</GlobalErrorBoundary>
  )
}

export default App;
