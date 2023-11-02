import Header from "./Header.js";

//first
ReactDOM.render(<h1>Hello this is index.js file</h1>, document.getElementById("root"))

//secound
ReactDOM.render(<p>Hi, my name is Wajeh</p>, document.getElementById('MyName'))

//ul List
ReactDOM.render(
    <ul>
        <li>Red</li>
        <li>Blue</li>
        <li>White</li>
    </ul>,
    document.getElementById('myul'))

//React its composable
//reusable component
function NavBar() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

            {/* <!-- Links --> */}
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                </li>
            </ul>

            {/* <!-- Navbar text--> */}
            <span class="navbar-text">
                Navbar text
            </span>

        </nav>
    )
}

function MainContent() {
    return (
        <h1>Im learning React!</h1>
    )
}
ReactDOM.render(
    <div>
        {/* <NavBar /> */}
        <MainContent />
    </div>
    ,
    document.getElementById('root')
)

//vanilla javascript DOM
// Imperative code
// How should it be done? Describe to me every step on hpw to do somthing, and i ll di it 
const h1 = document.createElement('h1');
h1.textContent = 'Vanilla JavaScrpt (Imperative code)';
h1.className = 'header';
document.getElementById('test1a').append(h1);


//React its Declarative
// What should be be done? just tell me what to do, and i ll worry about how i get it done 
ReactDOM.render(<h1 className="header">JSX (Declarative code)</h1>, document.getElementById("test1b"))

//React its hireable skill & its actively maintained by skilled people

const page = (
    <div>
        <hr></hr>
        <h1>abcd</h1>
        <p>efgh</p>
    </div>
)
ReactDOM.render(page, document.getElementById('var1'))
console.log(page)


//challenge 3
const navbar = (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

        {/* <!-- Links --> */}
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Link 1</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link 2</a>
            </li>
        </ul>

        {/* <!-- Navbar text--> */}
        <span class="navbar-text">
            challange 3
        </span>

    </nav>
)

// ReactDOM.render(navbar, document.getElementById('root'))


//challenge 4
const var2 = (
    <div>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <hr></hr>
    </div>
)
ReactDOM.render(var2, document.getElementById('var2'))

//challenge 50m
const p50m = (
    <div>
        <img src="./react-logo.png" width="100px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
        </ul>
    </div>
)
ReactDOM.render(
    p50m
    , document.getElementById('50m'))

//Custom component
// we need to use pascal case insted of camelcase for comonent names
function PageFunc() {
    return (
        <div>
            <hr />
            <img src="./react-logo.png" width="100px" />
            <h1>Fun facts about Reactff</h1>
            <ol>
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
            </ol>
        </div>
    )
}
//we should wrap our function with angel brackets
ReactDOM.render(<PageFunc />, document.getElementById('1h'))

//challange 1:07:30

function PageFunc2() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<PageFunc2 />, document.getElementById("PageFunc2"))

//Parent and child component


function Footer() {
    return (
        <footer>
            <small>@ wajeh abuarja</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Why React?</h1>
            <ol>
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
            </ol>
        </div>
    )
}
