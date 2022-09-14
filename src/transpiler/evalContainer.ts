import { NATIVE_STORAGE_ID } from '../constants'
import type { Context } from '../types'

type Evaler = (code: string, context: Context) => any

/*
  We need to use new Function here to ensure that the parameter names do not get
  minified, as the transpiler uses NATIVE_STORAGE_ID for access
 */

// export function getSandboxEvaler(contextParamId: string) {
//   return new Function(
//     'code',
//     contextParamId,
//     `
//     ({ ${NATIVE_STORAGE_ID}, ...${contextParamId} } = ${contextParamId});
//     if (${NATIVE_STORAGE_ID}.evaller === null) {
//       return eval(code);
//     } else {
//       return ${NATIVE_STORAGE_ID}.evaller(code);
//     }
//   `) as Evaler
// }

export const sandboxedEval = new Function(
  'code',
  'ctx',
  `
  ({ ${NATIVE_STORAGE_ID}, ...ctx } = ctx);
  if (${NATIVE_STORAGE_ID}.evaller === null) {
    return eval(code);
  } else {
    return ${NATIVE_STORAGE_ID}.evaller(code);
  }
`) as Evaler
