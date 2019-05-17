/*
 * @Author: saber2pr
 * @Date: 2019-05-17 18:13:37
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-17 18:17:28
 */
import { Reflect } from '@saber2pr/reflect'
import { KEY } from './metadatakeys'
import { Routes } from './types'

export function Route(path?: string): MethodDecorator {
  return (target, key, descriptor) => {
    const routes = Reflect.getMetadata<Routes>(KEY.Route, target) || []
    routes.push({
      path: path || String(key),
      callback: descriptor.value as any,
      origin: target
    })
    Reflect.defineMetadata(KEY.Route, routes, target)
  }
}

export function BaseUrl(path: string = ''): ClassDecorator {
  return target => Reflect.defineMetadata(KEY.BaseUrl, path, target)
}
