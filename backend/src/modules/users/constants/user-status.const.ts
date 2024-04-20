export const USER_STATUS = {
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
  TEMP_DISABLED: 'TEMP_DISABLED',
  PERM_DISABLED: 'PERM_DISABLED',
} as const;

export type UserStatus = keyof typeof USER_STATUS;
