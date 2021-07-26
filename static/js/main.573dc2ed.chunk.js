(this["webpackJsonplearn-through-examples"]=this["webpackJsonplearn-through-examples"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},244:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(11),r=n.n(a),i=(n(22),n(23),n(5),n(17)),d=n(246),h=n(245),o=n(0),l=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://reactjs.org/docs/hooks-state.html",children:"useState()"})}),Object(o.jsx)(d.a,{language:"javascript",style:h.a,children:"\n        const App = () => {\n            // the initial state is passed in as an argument\n            // useState() returns the current state and a function that updates it\n            const [count, setCount] = useState(0);\n\n            const handleClick = () => {\n                setCounter(count + 1);\n            };\n\n            return (\n                <div>\n                    <div>{count}</div>\n                    <button onClick={handleClick}>Increment</button>\n                </div>\n            );\n        };\n    "})]})},j=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://reactjs.org/docs/hooks-state.html",children:"JSX: style and className"})}),Object(o.jsx)(d.a,{language:"javascript",style:h.a,children:'\n        const App = () => {\n            return (\n            // CSS properties are camel cased\n            <div\n                style={{\n                paddingTop: 20,\n                width: 500\n                }}\n            >\n                <h1 className="title">Title</h1>\n            </div>\n            );\n    '})]})},u=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://reactjs.org/docs/lists-and-keys.html",children:"Lists"})}),Object(o.jsx)(d.a,{language:"javascript",style:h.a,children:"\n    const App = () => {\n        return (\n          <div>\n            <h3>List of Items</h3>\n            <table>\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Description</th>\n                </tr>\n              </thead>\n              <tbody>\n                {list.map((item) => (\n                  <tr key={item.id}>\n                    <td>{item.name}</td>\n                    <td>{item.description}</td>\n                  </tr>\n                ))}\n              </tbody>\n            </table>\n          </div>\n        );\n      }\n    "})]})};var p=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)("h3",{children:"Learn React Hooks Through Examples"}),Object(o.jsx)("p",{children:"This resource ise perfect as a refresher for concepts. The examples can be used as boilerplate. They are simple, self-explanatory, and minimalist by design."}),Object(o.jsx)(l,{}),Object(o.jsx)(j,{}),Object(o.jsx)(u,{})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,247)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),s(t),c(t),a(t),r(t)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),b()}},[[244,1,2]]]);
//# sourceMappingURL=main.573dc2ed.chunk.js.map