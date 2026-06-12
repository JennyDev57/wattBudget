import { Module } from '@nestjs/common';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './lib/auth';
import { UsersController } from './users.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RechargeModule } from './recharge/recharge.module';

@Module({
  imports: [AuthModule.forRoot({ auth }), RechargeModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
