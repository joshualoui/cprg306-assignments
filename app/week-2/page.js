import Title from './title.js';

export default function Page() {
    let a = 5;
    let b = 10;
    let c = a + b;

    return(
        <main>
            <Title/>
            {/* <h1>Web Dev 2 Week 2 Demo</h1> */}
            <p>The other page</p>
            <p>the sum of {a} and {b} is = {c}</p>
            {/* <p>Link to week 2 Home page: <Link href="app">Weak 2 Home Page here</Link> </p> */}

        </main>
    )
}