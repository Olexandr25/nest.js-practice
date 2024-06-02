import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }

  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne() {
    return 'This action returns a song';
  }

  @Put(':id')
  update() {
    return 'This action updates a song';
  }

  @Delete(':id')
  remove(): string {
    return 'This action removes a song';
  }
}
