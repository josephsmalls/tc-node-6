# Review 1/6/22 - HTML Intro

**HTML**, or Hypertext Markup Language, is the standard language for writing web pages (_documents_). Provides the content and structure of a web page.

## Anatomy of an Element

```html
<!-- Opening tag -->
<tagname>
  <!-- Inner HTML -->
  <!-- Text -->
  <!-- Child Elements -->

  <!-- Closing tag -->
</tagname>
```

### Types of Elements

1. Block Level - elements will take up 100% of the containing width; will not share a line
2. Inline Level - elements will only take as much width as needed per its content; will share a line with inline elements

## Tags

### Top Level

`html` root element
`head` contains meta data about the document
`body` contains all of the displayed content

### Link

`a` anchor tags build _links_

### Lists

`ol` ordered list
`ul` unordered list
`li` list item

### Headings

`h1` heading 1
`h2` heading 2
`h3` heading 3
`h4` heading 4
`h5` heading 5
`h6` heading 6

### Media

`img` displaying images
`video` displaying videos
`iframe` multimedia content
`canvas` interactive, 2d/3d content

### Text

`p` paragraphs
`span` text container
`strong` important text (bold)
`em` emphasized text (italics)
`u` underlined important (stressed) text

### Containers

`div` _division_; generic container element
`nav` navigation menu
`section` section of content
`main` main content
`article` article
`aside` content aside of the main content
`header` header content
`footer` footer content

## Attributes

`href` hypertext reference for link addresses
`title` labels elements with additional content, adds tooltip
`src` url for loading image data
`alt` alternative text for images; used if an image doesn't display or gives image description for screen readers
`name` type of meta tag
`content` content for a meta tag
`lang` declares the text language of the page
