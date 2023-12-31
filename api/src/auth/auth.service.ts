import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAuthDto } from './dto/update.auth.dto';
import { AuthSignupDto } from './dto/auth.signup.dto';
import { AuthCredentialDto } from './dto/auth.credential.dto';
import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(authSignupDto: AuthSignupDto): Promise<object> {
    const { companyName, email, password, phone, address } = authSignupDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User();
    user.companyName = companyName;
    user.email = email;
    user.phone = phone;
    user.address = address;
    user.salt = salt;
    user.hashedPassword = hashedPassword;

    try {
      await this.usersRepository.save(user);

      return {
        message: 'Company Created Successfull',
      };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException(['Email already exists']);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    authCredentialDto: AuthCredentialDto,
  ): Promise<User> {
    const { email, password } = authCredentialDto;

    const user = await this.usersRepository.findOne({ where: { email } });
    if (
      user &&
      user.deletedAt == null &&
      (await user.validatePassword(password))
    ) {
      return user;
    }
    return null;
  }

  async signIn(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string; user: object }> {
    const user = await this.validateUserPassword(authCredentialDto);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { email, companyName, phone, address } = user;
    const payload = { email, companyName, phone, address };
    const accessToken = await this.jwtService.sign(payload);

    delete user.hashedPassword;
    delete user.salt;
    delete user.deletedAt;
    return { accessToken, user };
  }

  async update(updateAuthDto: UpdateAuthDto, user: User): Promise<User> {
    const updatedUser = {
      ...user,
      ...updateAuthDto,
    };

    return await this.usersRepository.save(updatedUser);
  }

  async remove(user: User): Promise<void> {
    await this.usersRepository.softDelete({
      id: user.id,
    });
  }
}
