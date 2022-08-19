export interface RatesDto {
  id: number,
  concept: string,
  value: number
}

export type CreateRate = Omit<RatesDto, 'id'>;

export type GetRate = Required<RatesDto>;

export type UpdateRate = Required<RatesDto>;

export type DeleteRate = Omit<RatesDto, 'concept' | 'value'>;
