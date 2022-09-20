import type { Context } from '../types'

export type Modules = {
  [module: string]: {
    tabs: string[]
  }
}

export type ModuleBundle = (context: { context: Context }) => ModuleFunctions

export type ModuleTab = ((React: any, ReactDOM: any) => any) | ((React: any) => any) | (() => any)

export type ModuleFunctions = {
  [functionName: string]: Function
}
