import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('movies')
export class Movies {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    nome: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    genero: string;

    @Column({ type: "smallint", nullable: false})
    duracao: number;

    constructor(nome: string, genero: string, duracao: number) {
        this.nome = nome;
        this.genero = genero;
        this.duracao  = duracao;
    }  
}