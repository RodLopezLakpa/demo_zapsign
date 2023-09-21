import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [WebhookModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
