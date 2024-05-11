import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { PassportLocalGuard } from './guards/passport-local.guard';
import { Request } from 'express';
import { PassportJwtGuard } from './guards/passport-jwt.guard';
import { CustomerJwtDecodedSchema } from './swagger/customer-jwt-decoded.schema';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse({
    description: 'The JSON Web Token including customer/staff details',
    schema: {
      type: 'string',
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZiNjZhYTY1LWFkOTgtNGYwNi05MzliLTgyMjYxNDkyNTdkMSIsInVzZXIiOnsiaWQiOiI5ZmY2MTc2Yi0wZDEwLTRlZWEtYmM5My0wYWU2MTAyZDgwODgiLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJTY290dCIsImVtYWlsIjoiYXNwLnNoZWhhbnJlc2hpbkBnbWFpbC5jb20iLCJyb2xlIjoiQ1VTVE9NRVIiLCJzdGF0dXMiOiJJTkFDVElWRSIsImNvbnRhY3RzIjpbeyJpZCI6ImJiOTQxYjJkLTFjOWMtNDA4NS05NTFjLTAwNmM1NGJhYzBkYyIsInBob25lTnVtYmVyIjoiNzYxMjM3NDMxIiwiaXNEZWZhdWx0Ijp0cnVlLCJjb3VudHJ5Ijp7ImlkIjoiNWNlMjE5NmQtNmIwNi00ZGFiLWExMTgtZGYzY2Y0YmExNDIyIiwibmFtZSI6IlBvbGFuZCIsImNvZGUiOiIrMTIzIn19XX0sImFkZHJlc3MiOnsiaWQiOiJmM2RiMWE5Yy0wYjhhLTQwOGYtODM2Yy05Y2E5NjUyYmFmMDEiLCJsaW5lMSI6IjIyMUIiLCJsaW5lMiI6IkJha2VyJ3Mgc3RyZWV0IiwiY2l0eSI6IkxvbmRvbiIsInJlZ2lvbiI6IkdyZWF0ZXIgTG9uZG9uIiwiemlwQ29kZSI6IkVDMUEgMUFMIiwiY291bnRyeSI6eyJpZCI6IjVjZTIxOTZkLTZiMDYtNGRhYi1hMTE4LWRmM2NmNGJhMTQyMiIsIm5hbWUiOiJQb2xhbmQiLCJjb2RlIjoiKzEyMyJ9fSwiY2FydCI6eyJpZCI6IjBkMTQ5ZGFlLWZmMzgtNGY3ZS04NzVkLTQxY2VkMmVkMjFhYyIsIml0ZW1zIjpbXX0sImlhdCI6MTcxNDM2MDQyMH0.ywHKBz657rmJC-EU31YeRiMuYRzWx9MXcXd3LOZeQWU',
    },
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(PassportLocalGuard)
  @Post('login')
  login(@Req() req: Request) {
    return req.user;
  }

  @ApiOkResponse({
    description:
      'The decoded JSON Web Token including customer details and issued time',
    type: CustomerJwtDecodedSchema,
  })
  @UseGuards(PassportJwtGuard)
  @Get('status')
  status(@Req() req: Request) {
    return req.user;
  }
}
