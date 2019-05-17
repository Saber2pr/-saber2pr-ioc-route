/*
 * @Author: saber2pr
 * @Date: 2019-05-17 18:13:34
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-17 18:30:08
 */
import { Injector } from '@saber2pr/ioc'
import { Reflect } from '@saber2pr/reflect'
import { Routes, Route } from './types'
import { KEY } from './metadatakeys'

export function parser(component: { new (): any }) {
  const baseUrl = Reflect.getMetadata<string>(KEY.BaseUrl, component)
  const instance = Injector(component)
  const routes = Reflect.getMetadata<Routes>(KEY.Route, instance)
  return routes.map<Route>(route => {
    route.path = baseUrl + route.path
    return route
  })
}
