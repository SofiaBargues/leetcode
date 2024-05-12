class TrieNode {
    public isWordEnd: boolean
    public children: Array<TrieNode|null>

    constructor() {
        this.isWordEnd = false
        this.children = new Array<TrieNode|null>(26).fill(null)
    }

}

const A_CODE = 'a'.charCodeAt(0)

function charToIndex(char: string) : number{
        const charCode = char.charCodeAt(0) - A_CODE
        return charCode
}

class Trie {
    head: TrieNode
    constructor() {
        this.head= new TrieNode()
    }

    insert(word: string): void {
        let curr : TrieNode = this.head

        for(let char of word){
            const code = charToIndex(char)
            let next = curr.children[code]
            if(!next){
                const node = new TrieNode()
                curr.children[code] = node
                next = node
            }
            curr = next
        }
        // Mark end of word
        curr.isWordEnd = true
    }

    search(word: string): boolean {
        let curr : TrieNode = this.head

        for(let char of word){
            const code = charToIndex(char)
            let next = curr.children[code]
            if(!next){
                return false
            }
            curr = next
        }
        // Check if is end of word
        return curr.isWordEnd 
    }

    startsWith(prefix: string): boolean {
        let curr : TrieNode = this.head

        for(let char of prefix){
            const code = charToIndex(char)
            let next = curr.children[code]
            if(!next){
                return false
            }
            curr = next
        }
        // If got until end of prefix, then it passed
        return true 
    }

}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */