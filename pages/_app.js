import "../styles/globals.css";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { makeStore, store } from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default withRedux(makeStore)(MyApp);
