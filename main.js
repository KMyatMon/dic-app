(this.webpackJsonpdictionary = this.webpackJsonpdictionary || []).push([[0], {
    20: function(e, n, t) {},
    40: function(e, n, t) {},
    42: function(e, n, t) {},
    43: function(e, n, t) {},
    44: function(e, n, t) {},
    45: function(e, n, t) {},
    46: function(e, n, t) {},
    47: function(e, n, t) {},
    48: function(e, n, t) {
        "use strict";
        t.r(n);
        var c = t(1)
          , i = t.n(c)
          , s = t(15)
          , o = t.n(s)
          , r = (t(20),
        t.p + "static/media/logo.951ad035.png")
          , a = t(3)
          , l = t(6)
          , d = t.n(l)
          , j = (t(40),
        t(0));
        function h(e) {
            return e.synonyms ? Object(j.jsxs)("div", {
                className: "Synonyms",
                children: [Object(j.jsx)("strong", {
                    children: "Similar:"
                }), Object(j.jsx)("ul", {
                    children: e.synonyms.map((function(e, n) {
                        return Object(j.jsx)("li", {
                            children: e
                        }, n)
                    }
                    ))
                })]
            }) : null
        }
        t(42);
        function u(e) {
            return e.meaning ? Object(j.jsxs)("div", {
                className: "Meaning",
                children: [Object(j.jsx)("h3", {
                    children: e.meaning.partOfSpeech
                }), Object(j.jsx)("p", {
                    children: e.meaning.definition
                }), Object(j.jsx)("em", {
                    children: e.meaning.example
                }), Object(j.jsx)(h, {
                    synonyms: e.meaning.synonyms
                })]
            }) : null
        }
        t(43);
        function b(e) {
            return e.phonetic ? Object(j.jsx)("div", {
                className: "Phonetic",
                children: Object(j.jsx)("h2", {
                    children: e.phonetic
                })
            }) : null
        }
        t(44);
        function f(e) {
            return e.definition ? Object(j.jsxs)("div", {
                className: "Result",
                children: [Object(j.jsxs)("section", {
                    children: [Object(j.jsx)("h1", {
                        children: e.definition.word
                    }), Object(j.jsx)(b, {
                        phonetic: e.definition.phonetic
                    })]
                }), e.definition.meanings.map((function(e, n) {
                    return Object(j.jsx)("section", {
                        children: Object(j.jsx)(u, {
                            meaning: e
                        })
                    }, n)
                }
                ))]
            }) : null
        }
        t(45);
        function p(e) {
            return e.photos.length ? Object(j.jsx)("section", {
                className: "Photos",
                children: Object(j.jsx)("div", {
                    className: "row",
                    children: e.photos.map((function(e, n) {
                        return Object(j.jsx)("div", {
                            className: "col-4",
                            children: Object(j.jsx)("a", {
                                href: e.src.original,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: Object(j.jsx)("img", {
                                    src: e.src.landscape,
                                    className: "img-fluid",
                                    alt: e.photographer
                                })
                            })
                        }, n)
                    }
                    ))
                })
            }) : null
        }
        t(46);
        function O(e) {
            var n = Object(c.useState)(e.defaultKeyword)
              , t = Object(a.a)(n, 2)
              , i = t[0]
              , s = t[1]
              , o = Object(c.useState)(!1)
              , r = Object(a.a)(o, 2)
              , l = r[0]
              , h = r[1]
              , u = Object(c.useState)(null)
              , b = Object(a.a)(u, 2)
              , O = b[0]
              , m = b[1]
              , x = Object(c.useState)([])
              , g = Object(a.a)(x, 2)
              , y = g[0]
              , w = g[1];
            function v(e) {
                w(e.data.photos)
            }
            function N(e) {
                m(e.data);
                var n = "eac360db5fc86ft86450f3693e73o43f"
                  , t = "https://api.shecodes.io/images/v1/search?query=".concat(e.data.word, "&key=").concat(n);
                d.a.get(t, {
                    headers: {
                        Authorization: "Bearer ".concat(n)
                    }
                }).then(v)
            }
            function S() {
                var e = "https://api.shecodes.io/dictionary/v1/define?word=".concat(i, "&key=").concat("eac360db5fc86ft86450f3693e73o43f");
                d.a.get(e).then(N)
            }
            return l ? Object(j.jsxs)("div", {
                className: "Dictionary",
                children: [Object(j.jsxs)("section", {
                    children: [Object(j.jsxs)("form", {
                        onSubmit: function(e) {
                            e.preventDefault(),
                            S()
                        },
                        children: [Object(j.jsx)("label", {
                            children: "What word do you want to look up?"
                        }), Object(j.jsx)("input", {
                            type: "search",
                            placeholder: "Search for a word",
                            defaultValue: e.defaultKeyword,
                            autoFocus: !0,
                            className: "form-control search-input",
                            onChange: function(e) {
                                s(e.target.value)
                            }
                        })]
                    }), Object(j.jsx)("small", {
                        className: "hint",
                        children: "i.e. paris, wine, yoga, coding"
                    })]
                }), Object(j.jsx)(f, {
                    definition: O
                }), Object(j.jsx)(p, {
                    photos: y
                })]
            }) : (h(!0),
            S(),
            "Loading!")
        }
        t(47);
        var m = function() {
            return Object(j.jsx)("div", {
                className: "App",
                children: Object(j.jsxs)("div", {
                    className: "container",
                    children: [Object(j.jsx)("header", {
                        className: "App-header",
                        children: Object(j.jsx)("a", {
                            href: "https://www.shecodes.io/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: Object(j.jsx)("img", {
                                src: r,
                                className: "logo",
                                alt: "SheCodes Logo"
                            })
                        })
                    }), Object(j.jsx)(O, {
                        defaultKeyword: "sunset"
                    }), Object(j.jsxs)("footer", {
                        children: ["This project was coded by", " ", Object(j.jsx)("a", {
                            href: "https://www.shecodes.io/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "SheCodes"
                        }), " ", "and is", " ", Object(j.jsx)("a", {
                            href: "https://github.com/shecodesio/dictionary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "open-sourced on GitHub"
                        }), " ", "and", " ", Object(j.jsx)("a", {
                            href: "https://shecodes-dictionary.netlify.app/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "hosted on Netlify"
                        })]
                    })]
                })
            })
        }
          , x = function(e) {
            e && e instanceof Function && t.e(3).then(t.bind(null, 49)).then((function(n) {
                var t = n.getCLS
                  , c = n.getFID
                  , i = n.getFCP
                  , s = n.getLCP
                  , o = n.getTTFB;
                t(e),
                c(e),
                i(e),
                s(e),
                o(e)
            }
            ))
        };
        o.a.render(Object(j.jsx)(i.a.StrictMode, {
            children: Object(j.jsx)(m, {})
        }), document.getElementById("root")),
        x()
    }
}, [[48, 1, 2]]]);
//# sourceMappingURL=main.01880700.chunk.js.map
