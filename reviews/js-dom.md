# Review 1/20/22 - JavaScript DOM

The _Document Object Model_ creates object representations of html elements that we access and manipulate through JavaScript.

You can add the `script` tag to the body, so that the DOM tree is loaded before your JS script,
OR you can add the `script` tag to the head, including a `defer` attribute, so that the script loads but waits to be executed until after the DOM tree is loaded.

Access to the DOM tree through the `document` object.

## Select/Change Elements

- `document.getElementsByTagName("p")` selects all of the paragraph elements, returns an HTMLCollection
- `document.getElementsByClassName("className")` selects all elements with "className" class, returns an HTMLCollection
- `document.getElementById("someID")` selects the element with "someID" id, returns a single element

All html attributes are accessible and changable through properties on the element object:

```js
let link = document.getElementById("githubLink");
link.href = "https://github.com/Bryantellius";
```

## Add Elements

### Creating Elements

- `document.createElement("p")` creates a new paragraph element

### Adding Elements to the DOM

- `parent.appendChild(newElement)` appends (at the bottom) the new element to the parent
- `parent.insertBefore(newElement, refElement)` inserts the new element before the reference element

## Replace Elements

- `parent.replaceChild(newElement, refElement)` replaces the reference element with the new element

## Remove Elements

- `parent.removeChild(refElement)` removes the reference element from the parent element
