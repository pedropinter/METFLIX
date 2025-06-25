import { Request, Response } from 'express';
import { AppDataSource } from '../db/data-source';
import { Movies } from "../models/Movies";

const moviesRepository = AppDataSource.getRepository(Movies);

export class MoviesController {
    async list(req: Request, res: Response) {
        const Movies = await moviesRepository.find();
        res.json(Movies);
        return
    }

    async create(req: Request, res: Response) {
        const { nome, genero, duracao } = req.body;

        if (!nome || !genero || !duracao) {
            res.status(400).json({ message: "Todos os campos são necessários!" })
            return
        }

        const Moviees = new Movies(nome, genero, duracao)
        const newMovies = await moviesRepository.create(Moviees)
        await moviesRepository.save(newMovies)

        res.status(201).json({ message: "Filme Adicionado com Sucesso", movies: newMovies })
        return
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const movies = await moviesRepository.findOneBy({ id: Number(id) });

        if (!movies) {
            res.status(404).json({ message: 'filme não encontrado' });
            return
        }

        res.json(movies);
        return
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, genero, duracao } = req.body;

        const movies = await moviesRepository.findOneBy({ id: Number(id) });

        if (!movies) {
            res.status(404).json({ message: 'Filme não encontrado' });
            return
        }

        movies.nome = nome;
        movies.genero = genero;
        movies.duracao = duracao;

        await moviesRepository.save(movies);

        res.json(movies);
        return
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const movies = await moviesRepository.findOneBy({ id: Number(id) });

        if (!movies) {
            res.status(404).json({ message: 'Filme não encontrado' });
            return
        }

        await moviesRepository.remove(movies);

        res.status(204).send();
        return
    }
}
