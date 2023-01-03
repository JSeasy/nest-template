import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Injectable,
} from '@nestjs/common';
import { Erc20Service } from './erc20.service';
import { PartialErc20Dto, Erc20Dto } from './dto';

@Injectable()
@Controller('erc20')
export class Erc20Controller {
  constructor(private erc20Service: Erc20Service) {}

  @Post()
  create(@Body() createErc20Dto: Erc20Dto) {
    console.log(createErc20Dto);
    return this.erc20Service.create(createErc20Dto);
  }

  @Get()
  findAll(@Param() queryErc20Dto: PartialErc20Dto) {
    return this.erc20Service.findAll(queryErc20Dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.erc20Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateErc20Dto: PartialErc20Dto) {
    return this.erc20Service.update(+id, updateErc20Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.erc20Service.remove(+id);
  }
}
