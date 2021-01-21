export interface PlannedResponseUnit {
  type: PlannedResponseUnitType,
  time?: number,
  message?: string
}

export enum PlannedResponseUnitType {
  MESSAGE,
  DELAY,
}
