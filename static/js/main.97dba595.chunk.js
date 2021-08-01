(this["webpackJsonplearn-through-examples"]=this["webpackJsonplearn-through-examples"]||[]).push([[0],{260:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(20),r=n.n(i),a=(n(32),n(33),n(34),n(27)),j=n(264),d=n(263),l=n(0),o=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(j.a,{language:"javascript",style:d.a,children:e.codeSnippet})})},h=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"https://reactjs.org/docs/hooks-state.html",children:"useState()"})}),Object(l.jsx)(o,{codeSnippet:"\n        const App = () => {\n            // the initial state is passed in as an argument\n            // useState() returns the current state and a function that updates it\n            const [count, setCount] = useState(0);\n\n            const handleClick = () => {\n                setCounter(count + 1);\n            };\n\n            return (\n                <div>\n                    <div>{count}</div>\n                    <button onClick={handleClick}>Increment</button>\n                </div>\n            );\n        };\n    "})]})},u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"https://reactjs.org/docs/introducing-jsx.html",children:"JSX: style and className"})}),Object(l.jsx)(o,{codeSnippet:'\n    <div\n      style={{\n        paddingTop: 20,\n        width: 500,\n      }}\n    >\n      <div className="title">Title</div>\n    </div>;\n  '})]})},b=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"https://reactjs.org/docs/lists-and-keys.html",children:"Lists"})}),Object(l.jsx)(o,{codeSnippet:"\n      // key must be unique, avoid using the index of map\n      <ol>\n        {list.map((item) => (\n          <li key={item.id}>{item.name}</li>\n        ))}\n      </ol>\n    "})]})},x=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"https://reactjs.org/docs/hooks-effect.html",children:"UseEffect()"})}),Object(l.jsx)(o,{codeSnippet:"\n      // Passing an empty array as the second argument runs the effect only once\n      useEffect(() => {\n          fetch('http://example.com/random-movie.json')\n              .then(response => response.json())\n              .then(data => setMovie(data));\n      }, []);\n    "})]})},p=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"React"}),Object(l.jsx)("p",{className:"text-secondary",children:"React examples designed as refreshers."}),Object(l.jsx)(h,{}),Object(l.jsx)(u,{}),Object(l.jsx)(b,{}),Object(l.jsx)(x,{})]})},O=function(){return Object(l.jsx)("div",{children:"Vanilla JS Examples"})},m=n(11),f=n(2),g=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)(m.a,{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(m.b,{to:"/react",children:"React"})}),Object(l.jsx)("li",{children:Object(l.jsx)(m.b,{to:"/vanillajs",children:"About"})})]}),Object(l.jsxs)(f.c,{children:[Object(l.jsx)(f.a,{exact:!0,path:"/react",children:Object(l.jsx)(p,{})}),Object(l.jsx)(f.a,{path:"/vanillajs",children:Object(l.jsx)(O,{})})]})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,265)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),v()},32:function(e,t,n){},34:function(e,t,n){}},[[260,1,2]]]);
//# sourceMappingURL=main.97dba595.chunk.js.map