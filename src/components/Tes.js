import { useState } from "react";

const Testing = {
    tes: 1,
    tes2: 2,
    tes3: 3
};

const Testing2 = {
    ...Testing,
    tes4: 4,
    tes3: 10
}

console.log(Testing);
console.log(Testing2);

const Tes = () => {
    const [tester, setTester] = useState({});
    return (
        <div>
            <h3>Current Testing</h3>
            <button onClick={() => setTester(Testing)}>Testing 1</button>
            <button onClick={() => setTester(Testing2)}>Testing 2</button>

            <ul>
                {Object.keys(tester).map((t) => (
                    <li key={t}>
                        {t}: {tester[t]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tes;