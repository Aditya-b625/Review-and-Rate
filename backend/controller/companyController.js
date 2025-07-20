import { company } from "../models/companyModel.js";
import TryCatch from "../middleware/TryCatch.js";

//list company
export const createCompany = TryCatch(async (req, res) => {
    console.log(req.body);
    const {foundedOn} = req.body;
    const logoPath = req.file ? `/uploads/${req.file.filename}` : ''; // for single file upload

    const newCompany = {
        name: req.body.name,
        location: req.body.location,
        foundedOn: new Date(foundedOn),
        city: req.body.city,
        description: req.body.description,
        logo: logoPath,
        createdAt: new Date()
    };

    // const result = await db.collection('companies').insertOne(newCompany);
    const result = await company.create(newCompany);

    return res.status(201).json({
        msg: "Company created successfully",
        newCompany: { _id: result.insertedId, ...newCompany }
    });
});

export const getAllCompanies = TryCatch(async(req,res)=>{
    const companies = await company.find({}).sort({ createdAt: -1 });

    return res.status(200).json(companies);
});
