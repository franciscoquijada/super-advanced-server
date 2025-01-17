import { Injectable } from '@nestjs/common';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { DestinationsRepository } from './destinations.repository';
import { Destination } from './schemas/destination.schema';

@Injectable()
export class DestinationsService {
  constructor(
    private readonly destinationsRepository: DestinationsRepository,
  ) {}

  async create(
    latitude: number,
    longitude: number /*createDestinationDto: CreateDestinationDto*/,
  ): Promise<Destination> {
    return this.destinationsRepository.create({
      latitude,
      longitude,
    });
  }

  findAll() {
    return this.destinationsRepository.find({});
    // return `This action returns all destinations`;
  }

  findOne(id: string) {
    return this.destinationsRepository.findOne({ id });
    // return `This action returns a #${id} destination`;
  }

  update(id: number, updateDestinationDto: UpdateDestinationDto) {
    return `This action updates a #${id} destination`;
  }

  remove(id: number) {
    return `This action removes a #${id} destination`;
  }
}
