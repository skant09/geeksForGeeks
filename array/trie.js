trie.js;

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      // for each character create a trie node inside root
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      // if the char already exist move to the node with children char
      node = node.children[char];
    }
    // mark endOfWord on last char node
    node.endOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.endOfWord;
  }
  // check if there are words that start with a prefix
  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
