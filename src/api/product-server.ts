import express from "express";
import {ProductRepository} from "@/product/product-repository";

const app = express();
app.use(express.json());

const productRepo = new ProductRepository();


const baseUrl = "https://localhost:3333";
app.get(`${baseUrl}/products`, async ({res}) => {
    res?.json(await productRepo.getAll());
});

app.get(`${baseUrl}/products/:id`, async (req, res) => {
    res?.json(await productRepo.getById(req.params.id));
});

app.post(`${baseUrl}/products`, async (req, res) => {
    res?.json(await productRepo.create(req.body))
})

app.patch(`${baseUrl}/products/:id`, async (req, res) => {
    res?.json(await productRepo.patch(req.params.id,req.body))
})

app.put(`${baseUrl}/products/:id`, async (req, res) => {
    const {id, ...rest} = req.body
    res?.json(await productRepo.update(req.params.id,rest))
})

app.delete(`${baseUrl}/products/:id`, async (req, res) => {
    res?.json(await productRepo.deleteEntity(req.params.id))
})

