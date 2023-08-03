import { Plugin } from "vite";

// 解析ast
function treeWalk(
  ast: Record<string, any> | Array<Record<string, any>>,
  visitor: { [type: string]: (ast: Record<string, any>) => void },
) {
  for (const node of Object.values(ast)) {
    if (node && typeof node === 'object') {
      visitor[node.type]?.(node);
      treeWalk(node, visitor);
    }
  }
}

const VitePluginImportAntd = (): Plugin => {
  return {
    name: 'vite-plugin-import-antd',
    transform(code, id) {
      let antImportNode: Record<string, any> | undefined
      const antImports: string[] = []
      const ast = this.parse(code)
      // 循环遍历
      treeWalk(ast, {
        ImportDeclaration(node) {
          if (node.source.value === 'ant-design-vue') {
            antImportNode = node
            for (const spec of node.specifiers) {
              antImports.push(`import ${spec.local.name} from 'ant-design-vue/es/${spec.local.name.toLowerCase()}'`)
            }
          }
        },
      })
      if (antImportNode) {
        return code.slice(0, antImportNode.start)
        + antImports.join(';') + ';'
        + code.slice(antImportNode.end)
      }
    }
  }
}

export {
  VitePluginImportAntd
}

export default VitePluginImportAntd