---
title: "Czego użyłem, żeby blog był dla programisty?"
slug: gatsby-plugins-pl
date: 2020-06-11
language: pl
unlisted: true
generate-card: false
tags: ['developer', 'blog', 'gatsby']
translations:
  - link: '/gatsby-plugins'
    language: 'English'
---

## Kontekst

Przyznam od razu, że byc może mój setup jest drobnym overengineeringiem jeśli chodzi o blog, który zacząłem pisać, ale chciałem, żeby był jak bardziej przyjemny w używaniu dla programisty niż tylko markdown. Dodatkową korzyścią, którą czerpię z tego jest fakt, że mogę pomóc zbudować mojemu zespołowi wiki dzięki wiedzy, którą zdobyłem przy tej części pisania swojego bloga

## Wymagania

1. [Podświetlanie składni](#podświetlanie-składni)
2. [Dodawanie diagramów architektonicznych](#dodawanie-diagramów-architektonicznych)
3. [Dodawanie wyrafinowanych komponentów do strony](#dodawanie-wyrafinowanych-komponentów-do-strony)

### Podświetlanie składni

Tu akurat nie musiałem się napracować, jako, że `GatsbyJs` ma całkiem zgrabny moduł do podświetlania skłądni z niezłą dokumentacją [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)

### Dodawanie diagramów architektonicznych

Jeśli chodzi o dodawanie diagramów architektonicznych to rozważałem dwie możliwości:
1. Po prostu używanie obrazków stworzonych w innym programie jako obrazków
2. Generowanie diagramów poprzez jakieś narzędzie sprzężone z systemem budowanie tego bloga, które umożliwiłoby zapisywanie ich w czystym tekście

Kiedy zaczynałem swoją karierę jako programista natknąłem się na świetne narzędzie, które spełniałoby wymogi drugiej możliwości. Jeszcze jako stażysta dostałem zadanie, aby stworzyć wizualizację backlogu mojego zespołu z Jira w formie graficznej z podziałem na użytkowników/aktorów. Do tego celu używałem [plantUML](https://plantuml.com/), którego uwielbiam, ze względu na to, że pozwala tworzyć diagramy, które bez problemu można przetrzymywać w systemie kontroli wersji (bo są w formie tekstowej)

```
@startuml
/' skinparam monochrome reverse <- ze względu na to,
że używam ciemnego tła może się to okazać kluczowe
w przypadku generowania standardowych diagramów przez plantUML '/
/' C4 jest świetną notacją do zapisywania architektury systemu
Być może w przyszłości napiszę swój własny schemat kolorystyczny'/
!includeurl https://raw.githubusercontent.com/RicardoNiepel/C4-PlantUML/release/1-0/C4_Container.puml

Person(personAlias, "Blog Reader", "People who are interested in reading about agile and software development")
Container(containerAlias, "Label", "zwinny.dev", "My blog which present the various topics")
System(systemAlias, "Github", "to publish this page")

Rel(personAlias, containerAlias, "Read", "via webpage")
Rel(systemAlias, containerAlias, "Deploy")
@enduml
```

I znów jedyne co trzeba to skonfigurować plugin [gatsby-remark-plantuml](https://github.com/baerrach/gatsby-remark-plantuml), który pozwala na wygenerowanie i zaprezentowanie na stronie `gatsby`:

```plantuml
@startuml
/' skinparam monochrome reverse <- ze względu na to,
że używam ciemnego tła może się to okazać kluczowe
w przypadku generowania standardowych diagramów przez plantUML '/
/' C4 jest świetną notacją do zapisywania architektury systemu
Być może w przyszłości napiszę swój własny schemat kolorystyczny'/
!includeurl https://raw.githubusercontent.com/RicardoNiepel/C4-PlantUML/release/1-0/C4_Container.puml

Person(personAlias, "Blog Reader", "People who are interested in reading about agile and software development")
Container(containerAlias, "zwinny.dev", "blog", "My blog which present the various topics")
System(systemAlias, "Github", "to publish this page")

Rel(personAlias, containerAlias, "Read", "via webpage")
Rel(systemAlias, containerAlias, "Deploy")
@enduml
```

**Nauczka na przyszłość**
Czasem trzeba czytać każdy kawałek dokumentacji, bo w przykładzie kodu był komentarz:
> NOTE: As this plugin replaces the `platnuml` code blocks with an svg
its order in the `gatsby-transformer-remark` plugins list is important.
* before `gatsby-remark-prismjs` so the code block has been transformed
  and `gatsby-remark-prismjs` will never see it as a code block
* after `gatsby-remark-code-titles` so the title block will be generated

### Dodawanie wyrafinowanych komponentów do strony

`Gatsby` jest zbudowany w `React`, więc oczywiście możesz napisać całą stronę z użyciem `React`. Jednakże pisząc bloga myślę, że byłoby to niewygodne, żeby przełączać się między plikami, albo linkować je z postu. Także na to znalazłem ratunek, a jest nim [MDX format](https://mdxjs.com) w połączeniu z [gatsby-plugin-mdx](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/)

Można zacząć pisać kod JSX bezpośrednio w pliku .MDX:

```jsx
<div style={{ padding: '20px', backgroundColor: '#0097A7' }}>
  <h3>Witaj czytelniku zwinny.dev</h3>
  {console.log('Pozdrawiam Maciej Trojniarz - zwinny.dev')}
</div>
```

**Example:**

<div style={{ padding: '20px', backgroundColor: '#0097A7' }}>
  <h3>Witaj czytelniku zwinny.dev</h3>
  {console.log('Pozdrawiam Maciej Trojniarz - zwinny.dev')}
</div>

Można także importować całe komponenty napisane w plikach `jsx`:

```jsx{5}
import MyComponent from '../../src/Components/MyComponent'

# Nagłówek z wykorzystaniem markdown (MD)

Tekst opisujący Twój komponent

<MyComponent />

Jeszcze kawałek tekstu z użyciem Markdown
```
