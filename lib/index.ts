import type {
    NodeTransform,
    RootNode,
    TemplateChildNode,
} from '@vue/compiler-core'
import { NodeTypes } from '@vue/compiler-core'

export function createPropRemover(name: string): NodeTransform {
    return (node: RootNode | TemplateChildNode) => {
        if (node.type !== NodeTypes.ELEMENT) {
            return
        }

        node.props = node.props.filter((prop) => {
            if (
                prop.type === NodeTypes.ATTRIBUTE &&
                prop.name.startsWith(name)
            ) {
                return false
            }

            if (
                prop.type === NodeTypes.DIRECTIVE &&
                prop.arg &&
                prop.arg.type === NodeTypes.SIMPLE_EXPRESSION &&
                prop.arg.content.startsWith(name)
            ) {
                return false
            }

            return true
        })
    }
}
