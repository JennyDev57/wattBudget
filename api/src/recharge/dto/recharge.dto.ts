import { PartialType } from '@nestjs/swagger';

export class CreateRechargeRequestDto {
  startAt: Date = new Date();
  endAt: Date = new Date();
}

export class UpdateRechargeRequestDto extends PartialType(
  CreateRechargeRequestDto,
) {}
