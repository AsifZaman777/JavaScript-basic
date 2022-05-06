# JavaScript HTML DOM Navigation

Everything in a HTML document is a node. We can navigate the node tree using the node relationship.

DOM nodes : 
---
1. The entire document is a document node
2. Every HTML element is an element node
3. The text inside HTML elements are text nodes
4. Every HTML attribute is an attribute node(deprecated)
5. All comments are comment nodes

&nbsp;

>With the HTML DOM, all nodes in the node tree can be accessed by JavaScript.New nodes can be created, and all nodes can be modified or deleted.
&nbsp;
 >The nodes in the node tree have a hierarchical relationship to each other-
 
&nbsp;

The terms parent, child, and sibling are used to describe the relationships-

- In a node tree, the top node is called the root (or root node)
- Every node has exactly one parent, except the root (which has no parent)
- A node can have a number of children
  Siblings (brothers or sisters) are nodes with the same parent

## Navigating Between Nodes- 
```
- Parent nodes
- ChildNodes[node_Numbers]
- firstChild
- lastChild
- nextSibling
- previousSibling
```

```
<html>

  <head>
    <title>DOM Tutorial</title>
  </head>

  <body>
    <h1>DOM Lesson one</h1>
    <p>Hello world!</p>
  </body>

</html>
```
## Node tree works like that - 
-  `html` is the root node
-  `html` has no parents
-  `html`  is the parent of `head` and `body`
- `head` is the first child of `html`
- `body` is the last child of `html`

## From the example  -
- `head` has one child: `title`
- `title` has one child (a text node):"DOM Turtorial"
- `body` has two children: `h1` and `p`
- `h1` has one child : DOM Lesson one
- `p` has one child: "Hello World!"
- `h1` and `p` are siblings

## DOM Root Nodes
There are two root nodes by which we can get access to the full Document
- `document.body` (The body of the document)
- `document.documentElement` (Full document)   

## DOM nodeName property
Specify the name of the nodes

&nbsp;

Example : 
```
<body>
<h1 id="heading">Heading</h1>

<script>

var x=document.getElemetbyId("heading");
console.log(document.getElementbyId("heading").nodeName); ///return `H1`
</script>
</body>
```
## Node Value property 
- `nodeValue` for element node is `null`
- `nodeValue` for element text nodes is `text`
- `nodeValue` for attributes node is the attribute value

## nodeType property
```
Element Node         ----------|1|----------`<h1 class="heading">Text</h1>`
Attribute Node       ----------|2|----------`class = "heading" (deprecated)`
Text_Node            ----------|3|----------`Normal text`
Comment Node          ---------|8|----------`<!-----Comment---->`
Document Node        ----------|9|----------`The HTML document itself`
Document Type Node   ---------|10|----------`<!Doctype html>`
```
`Attribute node is depricted in HTML DOM(but works) but it is node depricated in XML DOM`


