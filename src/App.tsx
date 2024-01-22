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

import { Footer, Header, ToastContainer } from '@/components';
import IntroPage from '@/pages/intro/IntroPage';
import MainPage from '@/pages/main/MainPage';
import MyPage from '@/pages/my-page/MyPage';
import PortfolioDetailPage from '@/pages/portfolio-detail/PortfolioDetailPage';
import PortfolioEditPage from '@/pages/portfolio-edit/PortfolioEditPage';
import SignIn from '@/pages/signIn/SignIn';
import { store } from '@/redux/store';
import { ROUTE_PATH } from '@/utils/path';

export default function App() {
  return (
		<GlobalErrorBoundary FallbackComponent={GlobalErrorFallback}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<QueryClientProvider client={queryClient}>
						<BrowserRouter>
							<Header />
							<Routes>
								<Route path={ROUTE_PATH.INTRO} element={<IntroPage/>}></Route>
								<Route path={ROUTE_PATH.MAIN} element={<MainPage/>}></Route>
								<Route path={ROUTE_PATH.SIGN_IN} element={<SignIn/>}></Route>
								<Route path={ROUTE_PATH.MY_PAGE} element={<MyPage/>}></Route>
								<Route path={ROUTE_PATH.MY_PAGE_TAB} element={<MyPage/>}></Route>
								<Route path={ROUTE_PATH.PORTFOLIO_DETAIL} element={<PortfolioDetailPage/>}></Route>
								<Route path={ROUTE_PATH.PORTFOLIO_EDIT} element={<PortfolioEditPage/>}></Route>
							</Routes>
							<Footer />
						</BrowserRouter>
						<ToastContainer />
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</PersistGate>
			</Provider>
		</GlobalErrorBoundary>
  )
}

export const persistor = persistStore(store);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			throwOnError: true,
			retry: 0,
		},
		mutations: {
      throwOnError: false,
      retry: 0,
    },
	}
})