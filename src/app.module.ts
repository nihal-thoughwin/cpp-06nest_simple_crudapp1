import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres1',
    //   password: 'postgres',
    //   database: 'testdb2',
    //   entities: [User],
    //   synchronize: true,
    // }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
