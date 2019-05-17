/*
 * @Author: saber2pr 
 * @Date: 2019-05-17 18:25:06 
 * @Last Modified by:   saber2pr 
 * @Last Modified time: 2019-05-17 18:25:06 
 */
import { Routes } from './types'

export function transformer<T>(routes: Routes, path: string) {
  const route = routes.find(route => route.path === path)
  return route.callback.apply(route.origin) as T
}
