# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links]
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page.

### Links

- Solution URL: (https://github.com/ifaronti/News-Homepage)
- Live Site URL: (https://ifa-s-news-homepage.netlify.app/))

## My process
As with all my projects, I start by thinking of the CSS first. Knowing which item go where and where the item goes determines the container it'll go into. This project has a lot of tricky aspects like the bottom articles. The bottom articles can be arranged with flex or grid depending on what you are comfortable with. each article has an image, 2 headings and a paragraph. Each article needs to be arranged with flex or grid meaning more containers within each article. Without flexbox or  css grid, using positioning to arrange these articles will kill too much time so I had to use forsight. The mobile design comes with its own challenges; each container used must be reusable for the mobile workflow. I used flex-direction property to help me with this and the default flex gap was coutered with negative margins to help line the articles according to design image. I used 'pixel-perfet' to help determine font-size, flex gap, grid gap and items positions.

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- pixel perfect (firefox extension)

### What I learned
I discovered, I have more control using flexbox than grid although I'm comfortable with both. I did many wild experimentations with different properties before picking one. I'm now very comfortable with using pseudo elements.

### Continued development
I'll keep brushing up on my positioning skills. I want to get to a stage where I don't have to use the position property unless absolutely necessary for the project. I tried not using positions on some of my classes and the transition to mobile layout was smooth and fast. So, I'll try as much as possible to reduse my use of css 'position' property.

## Author
- Frontend Mentor - [@ifaronti](https://www.frontendmentor.io/profile/ifaronti)

## Acknowledgments
I'll love to thank frontenmentor.io for this design. I'm coming for the yealy pro membership soon. Thanks guys!! The practices helped me develop a skill I can live on for real.
