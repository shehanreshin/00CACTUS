const USER_ROLE = {
  CUSTOMER: 'CUSTOMER',
  STAFF: 'STAFF',
  ADMIN: 'ADMIN',
} as const;

export type UserRole = keyof typeof USER_ROLE;

const USER_STATUS = {
  ACTIVE: 'ACTIVE',
  DISABLED: 'DISABLED',
  DELETED: 'DELETED',
} as const;

export type UserStatus = keyof typeof USER_STATUS;