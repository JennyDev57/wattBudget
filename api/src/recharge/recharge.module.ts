import { Module } from '@nestjs/common';
import { RechargeService } from './recharge.service';
import { RechargeController } from './recharge.controller';
import { AdapterRechargeRepository } from './recharge.adapter';

@Module({
  controllers: [RechargeController],
  providers: [
    {
      provide: 'RechargeRepository',
      useClass: AdapterRechargeRepository,
    },
    RechargeService,
  ],
})
export class RechargeModule {}
