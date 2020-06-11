---
title: "What I've used to make it developer friendly?"
slug: gatsby-plugins
date: 2020-06-11
language: en
generate-card: true
tags: ['developer', 'blog', 'gatsby']
translations:
  - link: '/gatsby-plugins-pl'
    language: 'Polish'
---

## Context

Maybe it's a little of overengineering if we are talking about blog which I've started but I wanted to make it more Developer Friendly than just simply markdown. There is additional benefit for myself doing that - I can help my team build our own wiki site based on the knowledge I would gather on this exercise.

## Requirements

1. [Nice code highlighting](#nice-code-highlighting)
2. [Add architecture diagrams easily](#add-architecture-diagrams-easily)
3. [Embeding more sophisticated components on the pages](#embeding-more-sophisticated-components-on-the-pages)

### Nice code highlighting

This is easy peasy lemon squizee as Gatsby have plugins and modules to have nice code highlighting with a nice documentation [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)

### Add architecture diagrams easily

Regarding architecture diagrams there were two possibilites:

1. Just draw diagrams and embeded it as picture
2. Generate diagrams via some tools that would allow to use text based code and try to embeded it on the page

When I've started my software development career I came across wonderful tool that would satisfy second idea. I had a task as an intern to make visualization of ours jira tickets in form of graph devided by actors. I've learnt the tool [plantUML](https://plantuml.com/) which I absolutely love as it allows you to create diagrams that could be easily used with version control systems. You can simple use the code [example of UML sequence diagram](https://plantuml.com/sequence-diagram):

```
@startuml
/' skinparam monochrome reverse <- that would be needed
when presenting classic plantUML diagrams on black backgorund
/' C4 is a nice format for documenting architecure.
In future I will probably develop my own color scheme for it'/
!includeurl https://raw.githubusercontent.com/RicardoNiepel/C4-PlantUML/release/1-0/C4_Container.puml

Person(personAlias, "Blog Reader", "People who are interested in reading about agile and software development")
Container(containerAlias, "Label", "zwinny.dev", "My blog which present the various topics")
System(systemAlias, "Github", "to publish this page")

Rel(personAlias, containerAlias, "Read", "via webpage")
Rel(systemAlias, containerAlias, "Deploy")
@enduml
```

While having configured [gatsby-remark-plantuml](https://github.com/baerrach/gatsby-remark-plantuml) it could be transformed into and embeded on your `gatsby` generated page:

```plantuml
@startuml
/' skinparam monochrome reverse <- that would be needed
when presenting classic plantUML diagrams on black backgorund
/' C4 is a nice format for documenting architecure.
In future I will probably develop my own color scheme for it'/
!includeurl https://raw.githubusercontent.com/RicardoNiepel/C4-PlantUML/release/1-0/C4_Container.puml

Person(personAlias, "Blog Reader", "People who are interested in reading about agile and software development")
Container(containerAlias, "zwinny.dev", "blog", "My blog which present the various topics")
System(systemAlias, "Github", "to publish this page")

Rel(personAlias, containerAlias, "Read", "via webpage")
Rel(systemAlias, containerAlias, "Deploy")
@enduml
```

**Lesson learnt**
Read carefully documentation:
> NOTE: As this plugin replaces the `platnuml` code blocks with an svg
its order in the `gatsby-transformer-remark` plugins list is important.
* before `gatsby-remark-prismjs` so the code block has been transformed
  and `gatsby-remark-prismjs` will never see it as a code block
* after `gatsby-remark-code-titles` so the title block will be generated

### Embeding more sophisticated components on the pages

As Gatsby it's build with React you could of course write whole page using react. But when bloging it would be inconvient to switch back and forth between files and link them from your post. There is a rescue although you could use [MDX format](https://mdxjs.com) and [gatsby-plugin-mdx](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/)

You can start writing the React code inside your MDX files:

```jsx
<div style={{ padding: '20px', backgroundColor: '#0097A7' }}>
  <h3>Greetings reader of zwinny.dev</h3>
  {console.log('Greeetings from Maciej Trojniarz - zwinny.dev')}
</div>
```

**Example:**

<div style={{ padding: '20px', backgroundColor: '#0097A7' }}>
  <h3>Greetings reader of zwinny.dev</h3>
  {console.log('Greeetings from Maciej Trojniarz - zwinny.dev')}
</div>

Or you can import components from `js` files:

```jsx{5}
import MyComponent from '../../src/Components/MyComponent'

# Here you can give the title with markdorn notation

Some text that would describe your intent

<MyComponent />

Some more text using Markdown
```
