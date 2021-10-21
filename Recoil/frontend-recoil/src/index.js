import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Suspense } from "react";
import { RecoilRoot } from 'recoil';
import {atom,useRecoilSnapshot} from 'recoil'
import { useEffect } from "react";
import RecoilizeDebugger from 'recoilize'
// import { RecoilLogger } from 'recoil-devtools-logger';


import {productListState, cartState,productById,stateProduct} from './recoil/atom'
import {listP} from './recoil/selector'
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading... </div>}>
      <RecoilRoot values={[productListState,cartState,productById,stateProduct,listP]}>
         {/* <RecoilizeDebugger/> */}
      {/* <RecoilDevtools values={[productListState,cartState,productById,stateProduct]}>
      <RecoilLogger />
      </RecoilDevtools> */}
      {/* <RecoilLogger/> */}
        <App />

      </RecoilRoot>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

/*i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    react: { 
      useSuspense: false //   <---- this will do the magic
    }
});*/

function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug('The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}