const USER_STATUS = {
  ACTIVE: 'ACTIVE',
  DISABLED: 'DISABLED',
  DELETED: 'DELETED',
} as const;

export type UserStatus = keyof typeof USER_STATUS;
