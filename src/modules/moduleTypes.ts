import type { ModuleContexts } from '../types'

export type Modules = {
  [module: string]: {
    tabs: string[]
  }
}

export type ModuleBundle = (params: any, context: ModuleContexts) => ModuleFunctions

export type ModuleFunctions = {
  [functionName: string]: Function
}
