import cpy from 'cpy'
import { resolve, dirname } from 'path'
import { promises as fs } from "fs"
import sass from 'sass'
import glob from "fast-glob"

const sourceDir = resolve(__dirname, '../src')
//lib文件目录
const targetLib = resolve(__dirname, '../lib')

//src目录
const srcDir = resolve(__dirname, '../src')

const buildSass = async () => {
    //直接将less文件复制到打包后目录
    await cpy(`${sourceDir}/**/*.sass`, targetLib)

    //获取打包后.less文件目录(lib和es一样)
    const lessFils = await glob("**/*.sass", { cwd: srcDir, onlyFiles: true })

    //遍历含有less的目录
    for (let path in lessFils) {

        const filePath = `${srcDir}/${lessFils[path]}`
        //获取less文件字符串
        const lessCode = await fs.readFile(filePath, 'utf-8')
        //将less解析成css

        const code = await sass.render(lessCode, {
            //指定src下对应less文件的文件夹为目录
            paths: [srcDir, dirname(filePath)]
        })

        //拿到.css后缀path
        const cssPath = lessFils[path].replace('.sass', '.css')

        //将css写入对应目录
        await fs.writeFile(resolve(targetLib, cssPath), code.css)
    }
}

buildSass()



