import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Intro from '@/pages/intro/Intro';
import Main from '@/pages/main/Main';
import MyPage from '@/pages/mypage/MyPage';
import Portfolio from '@/pages/portfolio/Portfolio';
import PortfolioEdit from '@/pages/portfolioEdit/PortfolioEdit';
import SignIn from '@/pages/signIn/SignIn';
import SignUp from '@/pages/signUp/SignUp';
import { ROUTE_PATH } from '@/utils/path';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.INTRO} element={<Intro/>}></Route>
        <Route path={ROUTE_PATH.MAIN} element={<Main/>}></Route>
        <Route path={ROUTE_PATH.SIGNUP} element={<SignUp/>}></Route>
        <Route path={ROUTE_PATH.SIGNIN} element={<SignIn/>}></Route>
        <Route path={ROUTE_PATH.MYPAGE} element={<MyPage/>}></Route>
        <Route path={ROUTE_PATH.PORTFOLIO} element={<Portfolio/>}></Route>
        <Route path={ROUTE_PATH.PORTFOLIO_EDIT} element={<PortfolioEdit/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
