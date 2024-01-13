import { Module } from '@nestjs/common';
import { ApiCoreModule } from '@myorg/api/core';

@Module({
  imports: [ApiCoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
