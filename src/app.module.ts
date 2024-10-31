import { Module } from '@nestjs/common';
import { UsersModule } from './domain/users.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    CommonModule,
    UsersModule
  ]
})
export class AppModule { }
