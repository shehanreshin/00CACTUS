import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  onModuleInit(): any {
    this.$connect()
      .then(() => console.log('Connected to database'))
      .catch((err) => console.log(err));
  }
}
