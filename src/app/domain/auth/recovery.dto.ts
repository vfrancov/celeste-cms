export interface RecoveryDto {
  code: string,
  password: string,
  email: string
}

export type ResetPassword = Pick<RecoveryDto, 'email'>;

export type ChangePassword = Omit<RecoveryDto, 'email'>;
