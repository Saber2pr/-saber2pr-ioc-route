/*
 * @Author: saber2pr
 * @Date: 2019-05-17 18:26:01
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-17 19:00:16
 */
import { BaseUrl, Route, parser, transformer } from '..'

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
