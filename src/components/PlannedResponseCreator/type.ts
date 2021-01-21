export interface PlannedResponseUnit {
  type: PlannedResponseUnitType,
  time?: number,
  message?: string,
  id?: string
}

export enum PlannedResponseUnitType {
  MESSAGE,
  DELAY,
}
