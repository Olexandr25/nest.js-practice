import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs = [];

  create(song) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the db
    // Errors comes while fetching the songs from DB
    // throw new Error('Error while fetching the songs from the DB');
    return this.songs;
  }
}
