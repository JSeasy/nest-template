import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { IReqWithUser } from 'src/types';
import { AccountService } from './account.service';
import { AccountBody } from './dto';

@UseGuards(JwtAuthGuard)
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/bind')
  create(@Body() accountBody: AccountBody, @Req() request: IReqWithUser) {
    return this.accountService.create(accountBody, request.user);
  }

  @Get('/list')
  findAll(@Req() request: IReqWithUser) {
    return this.accountService.findAll(request.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: AccountBody) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
