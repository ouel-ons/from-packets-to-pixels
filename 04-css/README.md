# Chapter 04 — CSS

> From Packets to Pixels | Absolute beginners

## 1. What is CSS?

CSS changes how HTML looks: colors, text size, spacing and more. HTML is the content; CSS is the decoration.

**Fun fact:** Even without your own CSS, the browser gives headings and buttons default styles.

## 2. Connect CSS to our existing page

Open the `my-website` folder from Chapter 03. Create `style.css` next to `index.html`.

```text
my-website/
├── index.html
└── style.css
```

In `index.html`, add this line inside `<head>`, just after `<title>My website</title>`:

```html
<link rel="stylesheet" href="style.css">
```

This tells the browser to load your CSS file. Keep the rest of your HTML unchanged.

## 3. Your first CSS rule

Write this in `style.css`:

```css
h1 {
    color: blue;
}
```

- `h1` selects the heading.
- `color` is the property we want to change.
- `blue` is its new value.

Save both files and refresh the browser. Your heading should turn blue! Try changing `blue` to `purple`.

## 4. Style the whole page

Add the following rules below your heading rule:

```css
body {
    background-color: #eef2ff;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 40px;
}

p {
    font-size: 18px;
}
```

| Property | Meaning |
| --- | --- |
| `background-color` | Background color |
| `font-family` | Font used for text |
| `text-align` | Text alignment |
| `padding` | Space inside an element |
| `font-size` | Text size (`px` means pixels) |

`#eef2ff` is a color code for a very light blue.

## 5. Style the button

Add this at the bottom of `style.css`:

```css
button {
    background-color: blue;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
```

`padding` gives the button space around its text. `border-radius` rounds its corners. `cursor: pointer` shows a hand cursor when hovering over it.

Save and refresh. You now have the same webpage with a new design!

**Try it:** Change the background color, button color or text size. Change one value at a time and observe the result.

## Next chapter

Our button looks good but still has no custom behavior. In [Chapter 05 — JavaScript](../05-javascript/README.md), we will make it work. Keep both files.
