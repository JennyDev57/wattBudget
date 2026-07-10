import { Module } from '@nestjs/common';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './lib/auth';
import { RechargeModule } from './recharge/recharge.module';

@Module({
  imports: [AuthModule.forRoot({ auth }), RechargeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
