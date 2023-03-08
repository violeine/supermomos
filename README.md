# Supermomos's homework
> Brief overview of how I did this homework

## Overview 

The homework requirement is using Next.js/React, Typescript to build a `Create 
Social` features, which allow users to create/host a new event. 

### Assumption from design system/mock up.

Looking at Figma mock up, this feature is a form with multiple and different 
kinds of fields. We have `input`, `datepicker`, `dialog` to choose banner from, `textarea` to fill in description, `radio group` to pick one of three privacy setting for event, custom `select` for picking tags.

#### Design system

The design system consists of 4 brand colors: purple, yellow, darkblue and teal. 

Font family uses in the feature is `Inter` with base size 16px, 4px grid scaling.
	
### Framework of choice

After much consideration, I choose `@radix-ui`, `tailwindcss` and `@mantine/form` to build .

- `@radix-ui` is a unstyled, accessible set of components for building high-quality design system and web apps in React. It provides most common UI patterns like `checkbox`, `dialog`, `label` and give us complete control over it styling. These components will be basic blocks to build the feature upon.

- `tailwindcss` is my preferred framework for styling. It's a atomic, utility-first css framework, its provide us a predefined design token, which is easy to define project colors, fonts, spacing, to enable fast prototyping feature.

- `@radix-ui`, `tailwindcss` pair together can give me enough flexible to recreate figma mock up in a fast and reliable way.

- `@mantine/form` is the form validation library i choose for this feature. It's simple, small, versatile with basic validation, error handling and easily integrate with `@radix-ui`

There're several alternative such as `@charka-ui`, `@mantine` but i find it hard to customize to fit the mockup and also come with big bundle size. Overall, `@radix-ui` and `tailwindcss`	 give far more flexible in term of styling and composing components to build the feature.

### Project Structure
```
src
├── features             			<- features components 
│  └── create-social
│     ├── banner-dialog.tsx
│     ├── create-form.tsx
│     ├── fetch.ts
│     ├── tag-select.tsx
│     └── types.ts
├── pages           						<- next's specific dir
│  ├── _app.tsx
│  ├── _document.tsx
│  ├── api
│  │  └── create.ts 						<- api route to call mock api 
│  └── index.tsx
├── styles
│  └── globals.css
└── ui                 					<- reusable/styled components
   ├── badge.tsx
   ├── checkbox.tsx
   ├── icons.tsx
   ├── input.tsx
   └── radiogroup.tsx
```

- `feature` folder will hold all the feature of application. `type` and `fetch`
will also colocated here.

- `ui` folder will hold most of resuable/styled components to build features

- `pages` is Next'js route and api

