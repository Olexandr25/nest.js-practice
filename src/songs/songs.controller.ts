import { SongsService } from './songs.service';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Animals - Maroon 5');
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
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
