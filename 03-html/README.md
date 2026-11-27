# Chapter 03 — HTML

> From Packets to Pixels | Absolute beginners

## 1. What is HTML?

HTML tells the browser what to display. Think of it as the skeleton of a website.

```html
<h1>Hello!</h1>
<p>This is my first website.</p>
```

`<h1>` starts a heading and `</h1>` ends it. The text between them is the content. `<p>` creates a paragraph.

**Fun fact:** You can open an HTML file without an Internet connection.

## 2. Create your first page

Create a folder called `my-website`. Inside it, create a file named `index.html` using a text editor such as VS Code. Type this code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My website</title>
</head>
<body>
    <h1>Hello!</h1>
    <p>Welcome to my website.</p>
</body>
</html>
```

| Part | Meaning |
| --- | --- |
| `<!DOCTYPE html>` | Tells the browser to use modern HTML |
| `<html>` | Contains the document |
| `<head>` | Information about the page |
| `<title>` | Text in the browser tab |
| `<body>` | Content visible on the page |

Save the file, then double-click it to open it in your browser. Change the heading, save and refresh. You just edited a website!

## 3. A few useful tags

| Example | What it does |
| --- | --- |
| `<h1>My name</h1>` | Main heading |
| `<h2>About me</h2>` | Smaller section heading |
| `<p>I like coding.</p>` | Paragraph |
| `<a href="https://example.com">Visit</a>` | Link |
| `<button>Say hello</button>` | Button |

`href` is an attribute: it tells the link where to go. A button appears immediately, but our custom button will not do anything until Chapter 05.

## 4. Our project: a personal webpage

Replace the contents of `index.html` with this code. Keep this file for the next two chapters!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My website</title>
</head>
<body>
    <h1>Hello, I'm Alex!</h1>
    <p>I am learning web development.</p>
    <h2>My hobbies</h2>
    <p>Coding, music and reading.</p>
    <button>Say hello</button>
</body>
</html>
```

Expected result (rough sketch):

```text
Hello, I'm Alex!
I am learning web development.

My hobbies
Coding, music and reading.

[ Say hello ]
```

**Try it:** Change Alex to a name of your choice and change the hobbies. Save and refresh.

## Next chapter

We have content, but it looks plain. In [Chapter 04 — CSS](../04-css/README.md), we will style this exact file. Do not create a new website.
