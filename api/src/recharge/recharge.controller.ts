import {
  Controller,
  UseGuards,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RechargeService } from './recharge.service';
import {
  CreateRechargeRequestDto,
  UpdateRechargeRequestDto,
} from './dto/recharge.dto';
import { AuthGuard } from '@thallesp/nestjs-better-auth';

@Controller('recharge')
@UseGuards(AuthGuard)
export class RechargeController {
  constructor(private readonly rechargeService: RechargeService) {}

  @Post()
  create(@Body() createRechargeRequestDto: CreateRechargeRequestDto) {
    return this.rechargeService.create(createRechargeRequestDto);
  }

  @Get()
  findAll() {
    return this.rechargeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rechargeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRechargeDto: UpdateRechargeRequestDto,
  ) {
    return this.rechargeService.update(+id, updateRechargeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rechargeService.remove(+id);
  }
}
