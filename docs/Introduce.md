---
title: 'Hướng dẫn'
sidebar_position: 1
---

# Hướng Dẫn

Hướng dẫn sử dụng web và 1 số markdown cơ bản.

## 1. Thêm mới hoăc chỉnh sửa

* Ấn nút 📂**Editing** góc trên phải màn hình để mở dialog.
* Ấn nút 📂**Admin** để chuyển hướng sang trang admin.
* Lựa chọn thư mục muốn thêm.
  * Ấn nút 📤**Upload file** để thêm 1 hoặc nhiều các file như markdown, json, image, video,...
  * Ấn nút ➕**Create folder** để tạo thêm thư mục con của folder đã chọn.
  * Ấn nút 📥**Download** để tải file đã chọn.
  * Ấn nút ❌**Delete** để xóa các file đã chọn.

:::tip[My tip]

* _Nếu nhấp vào **Sửa trang này** ở cuối mỗi trang nhưng **không tìm thấy trang** thì thử f5 để reload lại trang edit._

* _Các file trùng tên sẽ bị ghi đè._

* _Nếu đẩy file bị lỗi vui lòng quay lại trang chính, vào **Docs tree** để xóa các file lỗi đó._
:::

## 2. Markdown basic

```md
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

This is a paragraph. Keep reading.

```md


This is a [Intro](/docs/Introduce).

![alt text](https://picsum.photos/600/400)
```

This is a [Intro](/docs/Introduce).

![alt text](https://picsum.photos/600/400)

This is a list.
```md
- Item 1
- Item 2
- Item 3
```
- Item 1
- Item 2
- Item 3

This is a numbered list.
```md
1. Item 1
2. Item 2
3. Item 3

> This is a blockquote.
```
1. Item 1
2. Item 2
3. Item 3

> This is a blockquote.

This is a code block.

```js
const name = 'John Doe';
console.log(name);
```

This is a table.
```md
| Name     | Age |
| -------- | --- |
| John Doe | Name |
|            |Name|
|            |Name|
| Jane Doe | 25  |
```

| Name     | Age |
| -------- | --- |
| John Doe | Name |
|            |Name|
|            |Name|
| Jane Doe | 25  |

This is a horizontal rule.

---
```md
`const name = 'John Doe';`

**This is a bold text.**

_This is an italic text._
```

`const name = 'John Doe';`

**This is a bold text.**

_This is an italic text._

```md title="Tab.md"

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="book" label="Book" default>
    Dive into the world of knowledge with a captivating book 📚
  </TabItem>
  <TabItem value="painting" label="Painting">
    Admire the strokes of artistry on a beautiful painting 🖼️
  </TabItem>
  <TabItem value="music" label="Music">
    Let the soothing melodies of music transport you 🎶
  </TabItem>
</Tabs>
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="book" label="Book" default>
    Dive into the world of knowledge with a captivating book 📚
  </TabItem>
  <TabItem value="painting" label="Painting">
    Admire the strokes of artistry on a beautiful painting 🖼️
  </TabItem>
  <TabItem value="music" label="Music">
    Let the soothing melodies of music transport you 🎶
  </TabItem>
</Tabs>


## 3. Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

### Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```md title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title                      <!-- tiêu đề, không có sẽ được thay thế bởi mục # đầu -->
description: My document description          
slug: /my-custom-url                          <!-- đường dẫn nhanh -->
sidebar_position: 1                           <!-- thứ tư sắp xếp ở thanh navbar trái -->
---
// highlight-end

## Markdown heading

Markdown text with [heading-1](#heading-1)
```

### Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](/Introduce).
```

```md
Let's see how to [Create a page](./Introduce.md).
```

**Result:** Let's see how to [Introduce](./Introduce.md).

### Images

Regular Markdown images are supported.

You can use absolute paths to reference images in the static directory (`static/img/docusaurus.png`):

```md
![Docusaurus logo](/img/docusaurus.png)
```

![Docusaurus logo](/img/docusaurus.png)

You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:

```md
![Docusaurus logo](./img/docusaurus.png)
```

<span style={{color: 'red'}}>Foo</span>


### Code Blocks

Markdown code blocks are supported with Syntax highlighting.

````md
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```
````

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

#### Highlight in code blocks
````md
```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```
````

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```

### Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

```md
:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::
```

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

### MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
