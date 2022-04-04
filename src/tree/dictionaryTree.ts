export interface DictionaryTreeItem {
	index: string | undefined
	target: {
		[key: string]: DictionaryTreeItem | undefined
	}
}

export default class DictionaryTree {
	indexLength = 1
	tree: DictionaryTreeItem = {
		index: 'root',
		target: {}
	}

	constructor(indexLength: number) {
		this.indexLength = indexLength
	}
	find(key: string) {
		return key
	}
	add(key: string, target: any) {
		const indexs: string[] = key.split(new RegExp(eval(`/([a-zA-Z0-9]{${this.indexLength}})/`))).filter(Boolean)

		function loopAdd(treeItem: DictionaryTreeItem | { [key: string]: any }, depth: number) {
			const i = indexs[depth]
			if (!i || depth>= indexs.length) {
				return treeItem
			}

			if(treeItem[i] === undefined){
				treeItem[i] = {
					index: i,
					target: {}
				}
			}
			console.log(treeItem[i])

			if(treeItem[i]){
				console.log(i)
			}
			// if (treeItem.target[i] === undefined && depth + 1 === indexs.length) {
			// 	treeItem.target[i] = target
			// }
			// if (treeItem.target[i] === undefined && depth + 1 < indexs.length) {
			// 	treeItem.target[i] = {
			// 		index: i,
			// 		target: loopAdd({}, ++depth)
			// 	}
			// }
			// if (treeItem[indexs[index]]) {			// 	treeItem[indexs[index]] = loopAdd(treeItem[indexs[index]], ++index)
			// }{

			// }
			return treeItem
		}
		console.log(loopAdd(this.tree.target, 0))
		// this.tree.target = loopAdd(this.tree.target, 0);
	}
}