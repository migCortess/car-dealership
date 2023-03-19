import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla',
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Seat',
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee',
    },
]

public findAll() {
    return this.cars;
}

public findOneById(id: string){
    const car = this.cars.find(car => car.id === id);
    if(!car) throw new NotFoundException(`Car with id '${id}' not found.`);
    return car;
}

public create(CreateCarDto: CreateCarDto){
    const car: Car = {
        id: uuid(),
        ...CreateCarDto
    }

    this.cars.push(car);

    return car;
}

}
