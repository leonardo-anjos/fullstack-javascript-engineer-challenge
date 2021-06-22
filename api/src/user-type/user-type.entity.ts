import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class UserType {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text', length: 255, nullable: false })
  description: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}