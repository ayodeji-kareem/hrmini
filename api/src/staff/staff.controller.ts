import { AuthGuard } from '@nestjs/passport';
import { StaffService } from './staff.service';
import { Staff } from './entities/staff.entity';
import { User } from './../auth/entities/user.entity';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { GetStaffFilterDto } from './dto/get-staff-filter.dto';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  UseGuards,
  Controller,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';

@Controller('staff')
@UseGuards(AuthGuard())
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  create(
    @Body(ValidationPipe) createStaffDto: CreateStaffDto,
    @GetUser() user: User,
  ): Promise<Staff> {
    return this.staffService.create(createStaffDto, user);
  }

  @Get()
  findAll(
    @Query(ValidationPipe) filterDto: GetStaffFilterDto,
    @GetUser() user: User,
  ): Promise<Staff[]> {
    return this.staffService.findAll(filterDto, user);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<Staff> {
    return this.staffService.findOne(id, user);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateStaffDto: UpdateStaffDto,
    @GetUser() user: User,
  ): Promise<Staff> {
    return this.staffService.update(id, updateStaffDto, user);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.staffService.remove(id, user);
  }
}
