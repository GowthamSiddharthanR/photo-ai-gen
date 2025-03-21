import z from "zod"

export const TrainModel = z.object({
    name: z.string(),
    type: z.enum(["Man", "Woman", "Other"]),
    age: z.number(),
    ethnicity: z.enum(["Black",
        "white",
        "Asian_American",
        "East_Asian",
        "South_East_Asian",
        "South_Asian",
        "Middle_Eastern",
        "Pacific",
        "Hispanic"
    ]),
    eyeColor: z.enum(["Brown","Blue","Hazel","Gray"]),
    bald: z.boolean(),
    zipUrl : z.string()
})

export const generateImage = z.object({
    prompt: z.string(),
    modelId: z.string(),
    userId: z.string(),
    imageUrl: z.string()
})

export const generateImageFromPack = z.object({
    modelId: z.string(),
    packId: z.string()
})