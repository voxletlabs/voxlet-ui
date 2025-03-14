import { promises as fs } from "fs";
import path from "path";

export async function readComponentSource(componentName: string) {
  const filePath = path.join(
    process.cwd(),
    "registry",
    "default",
    "components",
    `${componentName}`,
  );
  try {
    const source = await fs.readFile(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

export async function readComponentCoreCode(fileName: string) {
  const filePath = path.join(
    process.cwd(),
    "registry",
    "default",
    "ui",
    `${fileName}`,
  );
  try {
    const source = await fs.readFile(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

export async function readLibSource(libName: string) {
  const filePath = path.join(
    process.cwd(),
    "registry",
    "default",
    "lib",
    `${libName}`,
  );

  console.log(`[readLibSource] Trying to read file: ${filePath}`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`[readLibSource] Error reading file ${filePath}:`, error);
    return null;
  }
}

export async function readBlockSource(blockName: string) {
  const filePath = path.join(
    process.cwd(),
    "registry",
    "default",
    "blocks",
    `${blockName}`,
  );
  try {
    const source = await fs.readFile(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}