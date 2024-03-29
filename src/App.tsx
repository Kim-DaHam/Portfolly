import {
  QueryClient,
  QueryClientProvider,
	useQueryErrorResetBoundary,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
	ErrorBoundary as GlobalErrorBoundary,
} from "react-error-boundary";
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import IntroPage from '@/pages/intro/IntroPage';
import LogInPage from '@/pages/log-in/LogInPage';
import MainPage from '@/pages/main/MainPage';
import MainLayout from '@/pages/main-layout/MainLayout';
import MessagePage from '@/pages/message/MessagePage';
import MyPage from '@/pages/my-page/MyPage';
import PortfolioDetailPage from '@/pages/portfolio-detail/PortfolioDetailPage';
import PortfolioEditPage from '@/pages/portfolio-edit/PortfolioEditPage';
import SearchPage from '@/pages/search/SearchPage';
import { store } from '@/redux/store';
import { ROUTE_PATH } from '@/utils/path';

import { GlobalErrorFallback, AlertContainer, ToastContainer } from '@/components';

import '@/styles/GlobalFonts.css';

export default function App() {
	const { reset } = useQueryErrorResetBoundary();

  return (
		<GlobalErrorBoundary
			FallbackComponent={GlobalErrorFallback}
			onReset={reset}
		>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<QueryClientProvider client={queryClient}>
						<BrowserRouter>
							<Routes>
							<Route element={<MainLayout />}>
								<Route path={ROUTE_PATH.INTRO} element={<IntroPage/>} />
								<Route path={ROUTE_PATH.MAIN} element={<MainPage/>} />
								<Route path={ROUTE_PATH.SEARCH} element={<SearchPage/>} />
								<Route path={ROUTE_PATH.MY_PAGE} element={<MyPage/>} />
								<Route path={ROUTE_PATH.MY_PAGE_TAB} element={<MyPage/>} />
								<Route path={ROUTE_PATH.PORTFOLIO_DETAIL} element={<PortfolioDetailPage/>} />
								<Route path={ROUTE_PATH.MESSAGE} element={<MessagePage/>} />
							</Route>
							<Route path={ROUTE_PATH.PORTFOLIO_EDIT} element={<PortfolioEditPage/>} />
							<Route path={ROUTE_PATH.LOGIN} element={<LogInPage/>} />
							</Routes>
						</BrowserRouter>
						<ToastContainer />
						<AlertContainer />
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