import { Module } from '@nestjs/common';
import { ApiDatabaseModule } from '@myorg/api/database';
@Module({
  imports: [ApiDatabaseModule],
  providers: [ApiDatabaseModule],
  exports: [],
})
export class ApiCoreModule {}
