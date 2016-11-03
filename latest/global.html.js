tui.util.defineNamespace("fedoc.content", {});
fedoc.content["global.html"] = "<div id=\"main\" class=\"main\">\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        \n        \n        \n            Global\n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n    <div class=\"container-methods\">\n        <h3 class=\"subsection-title\">Methods</h3>\n\n        <dl>\n            \n<div class=\"tui-hidden\">\n<dt>\n    \n        <h4 class=\"name\" id=\"bindEvent\">\n            <span class=\"type-signature\"></span>bindEvent<span class=\"signature\">(element, type, handler, context<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 75</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Bind DOM events</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n        <th>Attributes</th>\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>element</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">HTMLElement</span>\n\n\n            \n            </td>\n\n            \n                <td class=\"attributes\">\n                \n\n                \n\n                \n                </td>\n            \n\n            \n\n            <td class=\"description last\"><p>element to bind events</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>type</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n                <td class=\"attributes\">\n                \n\n                \n\n                \n                </td>\n            \n\n            \n\n            <td class=\"description last\"><p>events name</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>handler</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">function</span>\n\n\n            \n            </td>\n\n            \n                <td class=\"attributes\">\n                \n\n                \n\n                \n                </td>\n            \n\n            \n\n            <td class=\"description last\"><p>handler function or context for handler<br> method</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>context</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n                <td class=\"attributes\">\n                \n                    &lt;optional><br>\n                \n\n                \n\n                \n                </td>\n            \n\n            \n\n            <td class=\"description last\"><p>context - context for handler method.</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"tui-hidden\">\n<dt>\n    \n        <h4 class=\"name\" id=\"forgetHandler\">\n            <span class=\"type-signature\"></span>forgetHandler<span class=\"signature\">(element, type, keyFn)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 63</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Forget memorized DOM event handlers</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>element</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">HTMLElement</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>element to bind events</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>type</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>events name</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>keyFn</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">function</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>handler function that user passed at on() use</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"tui-hidden\">\n<dt>\n    \n        <h4 class=\"name\" id=\"memorizeHandler\">\n            <span class=\"type-signature\"></span>memorizeHandler<span class=\"signature\">(element, type, keyFn, valueFn)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 45</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Memorize DOM event handler for unbinding</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>element</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">HTMLElement</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>element to bind events</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>type</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>events name</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>keyFn</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">function</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>handler function that user passed at on() use</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>valueFn</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">function</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>handler function that wrapped by domevent for<br> implementing some features</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"tui-hidden\">\n<dt>\n    \n        <h4 class=\"name\" id=\"safeEvent\">\n            <span class=\"type-signature\"></span>safeEvent<span class=\"signature\">(element, type<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"> &rarr; {object|Map}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 17</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Get event collection for specific HTML element</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n        <th>Attributes</th>\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>element</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">HTMLElement</span>\n\n\n            \n            </td>\n\n            \n                <td class=\"attributes\">\n                \n\n                \n\n                \n                </td>\n            \n\n            \n\n            <td class=\"description last\"><p>HTML element</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>type</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n                <td class=\"attributes\">\n                \n                    &lt;optional><br>\n                \n\n                \n\n                \n                </td>\n            \n\n            \n\n            <td class=\"description last\"><p>event type</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n    \n<span class=\"param-type\">object</span>\n|\n\n<span class=\"param-type\">Map</span>\n\n\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"tui-hidden\">\n<dt>\n    \n        <h4 class=\"name\" id=\"setClassName\">\n            <span class=\"type-signature\"></span>setClassName<span class=\"signature\">(element, cssClass)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 81</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Set className value</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>element</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">HTMLElement</span>\n|\n\n<span class=\"param-type\">SVGElement</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>target element</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>cssClass</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n|\n\n<span class=\"param-type\">Array.&lt;string></span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>class names</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"tui-hidden\">\n<dt>\n    \n        <h4 class=\"name\" id=\"unbindEvent\">\n            <span class=\"type-signature\"></span>unbindEvent<span class=\"signature\">(element, type, handler)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 118</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Unbind DOM events</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>element</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">HTMLElement</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>element to unbind events</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>type</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>events name</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>handler</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">function</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>handler function or context for handler<br> method</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        </dl>\n    </div>\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n</div>"