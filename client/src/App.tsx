import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorFallback from './components/errorfallback';
import CompletedScreen from './screens/completed.screen';
import HomeScreen from './screens/home.screen';
import LostScreen from './screens/lost.screen';
import QuestionScreen from './screens/question.screen';
import QuestionContextProvider from './store/questioncontextprovider';

function App() {

  const myErrorHandler = (error: Error, info: {componentStack: string}) => {
    // Do something with the error
    // E.g. log to an error logging client here
    console.log(error);
    console.log(info);
  }
  
  return (
    <QuestionContextProvider>
      <BrowserRouter>      
        <div className="container my-4">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>    
                <Routes>
                  <Route path='/' element={<HomeScreen />} />
                  <Route path='start' element={<QuestionScreen />}/>
                  <Route path='completed' element={<CompletedScreen />}/>
                  <Route path='*' element={<LostScreen />}/>
                </Routes>
              </ErrorBoundary>
            </div>
          </div>      
        </div>
    </BrowserRouter>    
    </QuestionContextProvider>
  );
}

export default App;
