# @saber2pr/ioc-route

> routes in ioc.

```bash
# from npm
npm install @saber2pr/ioc-route

# from github
git clone _____
```

# Feature

```ts
@BaseUrl('/api')
class App {
  @Route('/home')
  home() {
    return 'home'
  }

  @Route('/about')
  about() {
    return 'about'
  }
}

const data = parser(App)

console.log(transformer(data, '/api/home')) // home
console.log(transformer(data, '/api/about')) // about
```

---

## start

```bash
npm install
```

```bash
npm start

npm test
```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
