import { controledMihomoConfig } from '../config'

export function triggerSysProxy(enable: boolean): void {
  if (enable) {
    enableSysProxy()
  } else {
    disableSysProxy()
  }
}

export function enableSysProxy(): void {
  console.log('enableSysProxy', controledMihomoConfig['mixed-port'])
}

export function disableSysProxy(): void {
  console.log('disableSysProxy')
}