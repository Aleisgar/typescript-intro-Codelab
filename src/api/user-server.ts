import express from "express";
import {UserRepository} from "@/user/user-repository";

const app = express();
app.use(express.json());

const userRepo = new UserRepository();


const baseUrl = "https://localhost:3333";
app.get(`${baseUrl}/users`, async ({res}) => {
    res?.json(await userRepo.getAll());
});

app.get(`${baseUrl}/users/:id`, async (req, res) => {
    res?.json(await userRepo.getById(req.params.id));
});

app.post(`${baseUrl}/users`, async (req, res) => {
    res?.json(await userRepo.create(req.body))
})

app.patch(`${baseUrl}/users/:id`, async (req, res) => {
     res?.json(await userRepo.patch(req.params.id,req.body))
})

app.put(`${baseUrl}/users/:id`, async (req, res) => {
    const {id, ...rest} = req.body
    res?.json(await userRepo.update(req.params.id,rest))
})

app.delete(`${baseUrl}/users/:id`, async (req, res) => {
    res?.json(await userRepo.deleteEntity(req.params.id))
})

