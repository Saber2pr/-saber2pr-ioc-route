/*
 * @Author: saber2pr
 * @Date: 2019-05-17 18:13:46
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-17 18:22:02
 */
export type Route = {
  path: string
  callback: Function
  origin: Object
}

export type Routes = Array<Route>
