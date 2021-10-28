import React from "react";
import {GlobalStyles} from "./styles/style";
import { Global } from "@emotion/react";

import Tes from "./components/Tes";

const App = () => {
    return (
        <>
            <Global styles={GlobalStyles} />
            <section></section>
            <main>
                <section>
                    <div>wewewe</div>
                </section>
            </main>

            <Tes />
        </>
    )
}

export default App;

