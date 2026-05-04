import { Module } from '@nestjs/common';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './lib/auth';
import { AppController } from './app.controller';
import { AppService } from './app.service';

console.log('Auth configuration:', {
  baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:5000',
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: ['http://localhost:5000'],
});

@Module({
  imports: [AuthModule.forRoot({ auth })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
