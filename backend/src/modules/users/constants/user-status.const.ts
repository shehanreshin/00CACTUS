export const USER_STATUS = {
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
  BANNED: 'BANNED',
  DISABLED: 'DISABLED',
} as const;

export type UserStatus = keyof typeof USER_STATUS;
