import { resolve } from "path";
import { promises as fs } from "fs";
import sass from "sass";
import glob from "fast-glob";

const sourceDir = resolve(resolve(), "./src");
//lib文件目录
const targetLib = resolve(resolve(), "./lib");

//src目录
const srcDir = resolve(resolve(), "./src");

const buildScss = async () => {
  const scssFiles = await glob("**/*.scss", { cwd: sourceDir, onlyFiles: true });
  //遍历含有scss的目录
  for (let path in scssFiles) {
    const filePath = `${srcDir}/${scssFiles[path]}`;
    const compileResult = sass.compile(filePath)

    const cssPath = scssFiles[path].replace(".scss", ".css");

    //将css写入对应目录
    await fs.writeFile(resolve(targetLib, cssPath), compileResult.css);
  }
}

buildScss()
