import fs from "fs/promises"
import path from "path"

export const readFileFromDb = async <D = any>(
  filename: "cart" | "products",
): Promise<D> => {
  const pathToFile = path.join(process.cwd(), "src", "db", `${filename}.json`)

  const dataJson = await fs.readFile(pathToFile, { encoding: "utf-8" })
  return JSON.parse(dataJson) as D
}

export const writeFileToDb = async <D = any>(
  filename: "cart" | "products",
  data: D,
): Promise<void> => {
  const pathToFile = path.join(process.cwd(), "src", "db", `${filename}.json`)

  return await fs.writeFile(pathToFile, JSON.stringify(data))
}
