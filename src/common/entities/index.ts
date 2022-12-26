import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    transformer: {
      from(value) {
        return value ? value.slice(0, 19) : value;
      },
      to: (value) => {
        return value;
      },
    },
  })
  createDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    transformer: {
      from(value) {
        return value ? value.slice(0, 19) : value;
      },
      to: (value) => {
        return value;
      },
    },
  })
  updateDate: Date;

  @DeleteDateColumn({
    type: 'timestamp',
  })
  deleteDate: Date;
}

export function arrayDistinct(
  property: string,
  validationOptions?: ValidationOptions,
): any {
  return (object: any, propertyName: string): void => {
    let arr = [];
    registerDecorator({
      name: 'ArrayDistinct',
      target: object.constructor,
      propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any): boolean {
          arr = [];
          if (Array.isArray(value)) {
            const distinct = value.map((v) => v[property]);
            const map = new Map();
            distinct.forEach((item) => {
              if (map.has(item)) {
                arr.push(item);
              } else {
                map.set(item, 1);
              }
            });

            return !arr.length;
          }
          return false;
        },
        defaultMessage(args: ValidationArguments): string {
          return `${args.property} field value ${arr.join(',')}duplicate`;
        },
      },
    });
  };
}
