# Budget App

![](https://img.shields.io/static/v1?label=React&message=v18.2.0&color=blue)
![](https://img.shields.io/static/v1?label=Typescript&message=V4.8.4&color=green)
![](https://img.shields.io/static/v1?label=CSS&message=v.3&color=blue)
![](https://img.shields.io/static/v1?label=SASS&message=v.1.56&color=purple)

This budget application aims to help users create and manage their income and expenses and to set their saving target from their current balance to their saving account and vice versa.

- Click [here]() to view the app or use the app

![Frontpage](/img/FrontPage.png)

## Table of content

- [Technologies](#technologies)
- [Requirements](#requirements)
- [Project structure](#project-structure)
- [Getting started](#getting-started)

## Technologies

- RectJS
- SCSS/SASS for styling
- TypeScript
- uuid4 for generate identity
- localStorage for storing data

## Requirements

- [Users should be able to add new income and expense](/Note.md#users-add-new-income-and-expense-to-their-budget)
- [Transfer from balance account to saving account](/Note.md#transfer-from-balance-account-to-saving-account)
- [Balance should never be negative number](/Note.md#balance-should-never-negative-number)
- TypeScript used for the props types.
- [Add money back from saving account to current balance](/Note.md#add-money-back-from-saving-account-to-current-balance)
- [Source of incomes and expenses as the select elements](/Note.md#source-of-incomes-and-expenses-as-the-select-elements)
-  [Users can edit/delete income and expense](/Note.md#users-can-edit-and-delete-income-and-expense)
- `d3` package used to print out 2 piecharts for incomes and expenses in categories

## Project structure

```shell

.
├── README.md
├── Note.md
├── img
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.css.map
│   ├── App.tsx
│   ├── Components
│   │   ├── Balance.tsx
│   │   ├── Budget.tsx
│   │   ├── BudgetForm.tsx
│   │   ├── Header.tsx
│   │   ├── TargetSaving.tsx
│   │   └── Transfer.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── scss
│   │   ├── features
│   │   │   ├── _button.scss
│   │   │   ├── _card.scss
│   │   │   ├── _input.scss
│   │   │   └── _main.scss
│   │   ├── sections
│   │   │   ├── _balance.scss
│   │   │   ├── _content.scss
│   │   │   ├── _form.scss
│   │   │   └── _listSource.scss
│   │   └── styles.scss
│   └── types
│       ├── Balance.ts
│       ├── Budget.ts
│       ├── TargetSaving.ts
│       ├── budgetForm.ts
│       ├── common.ts
│       └── transfer.ts
└── tsconfig.json
```

## Getting started

- ### `For starting the application`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser, 

```shell
npm start
```

- ### Run SASS
```shell
npm run compile
```



- Check more by clicking this [link](/Note.md#home-page):
- Click this [link](/Note.md#delete-local-strorage-settings) to get information on how to delete localstorage