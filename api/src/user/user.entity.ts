import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserType } from 'user-type/user-type.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text', length: 255, nullable: false })
  nickname: string;

  @Column({ type: 'text', length: 255, nullable: false })
  name: string;

  @Column({ type: 'text', length: 255, nullable: false })
  phone: string;

  @Column({ type: 'text', length: 255, nullable: false })
  email: string;

  @ManyToOne(() => UserType)
  @JoinColumn()
  user_type: UserType;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}