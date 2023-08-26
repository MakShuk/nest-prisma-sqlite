import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './services/user/user.module';
import { PostModule } from './services/posts/post.module';

@Module({
	imports: [ConfigModule.forRoot(), UserModule, PostModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
