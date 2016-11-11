# PANG: the Polymorphic ANGular seed

## Description

This is a proof of concept exploring multiplatform code sharing options using Typescript + Angular 2 + Nativescript.
Current scenarios cover:

* Sharing API endpoints and interfaces between server & client
* Sharing branding (styles) between web and native
* Sharing business logic (services.ts) between web and native
* Sharing component logic (components.ts) between web and native

The purpose of this PoC is to explore the most natural way to develop multiplatform code without adding complexity.

## Usage

### common steps

```sh
npm install -g nativescript (run only once)
tns install
```

### Nativescript start

```sh
tns emulate ios
tns emulate android
```

### Webapp start

```sh
npm start
```

open (<http://localhost:9000/>)

### Server start

```sh
npm run server
```

### Webapp and server start

```sh
npm run all
```

### API ( <http://localhost:3000/api> )
