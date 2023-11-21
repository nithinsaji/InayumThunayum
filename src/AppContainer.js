import App from "./App";
import { Provider } from "react-redux";
import store from './redux/Store';
import {Toaster} from 'sonner';

const AppContainer = () => {

  // Asynchronously initialize the Redux store, including data fetching and authentication,
  // while displaying a loading indicator. Making sure that the store is initialized with credentials and data before rendering the app.


  return (
    <Provider store={store}>
      <Toaster richColors position="top-right" closeButton/>
      <App />
    </Provider>
  );
};

export default AppContainer;
