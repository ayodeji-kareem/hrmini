import { IsNotEmpty } from 'class-validator';

export class DepartmentDto {
  @IsNotEmpty()
  name: string;
}
