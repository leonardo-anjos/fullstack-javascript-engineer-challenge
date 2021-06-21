import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
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

  @OneToOne(() => UserType)
  @JoinColumn()
  user_type: UserType;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @UpdateDateColumn()
  // @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @CreateDateColumn()
  // @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}