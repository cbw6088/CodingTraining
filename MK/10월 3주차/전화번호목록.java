import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        Arrays.sort(phone_book);

        for (int i=0; i<phone_book.length-1; i++) {
            if (phone_book[i+1].startsWith(phone_book[i])) {
                return false;
            }
        }

        return true;
    }
}

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;

        List<String> keys = new ArrayList<>();

        Trie trie = new Trie();

        for (String p : phone_book) {
            trie.insert(p);
            keys.add(p);
        }

        for (String key: keys) {
            if (trie.search(key)) {
                answer = false;
                break;
            }
        }

        return answer;
    }
    static class TrieNode {
        Map<Character, TrieNode> childNode = new HashMap<>();
        boolean terminal;
    }

    static class Trie {
        TrieNode rootNode = new TrieNode();

        void insert(String str) {
            TrieNode node = this.rootNode;

            for (int i=0; i<str.length(); i++) {
                node = node.childNode.computeIfAbsent(str.charAt(i), key -> new TrieNode());
            }
            node.terminal = true;
        }
        boolean search(String str) {
            TrieNode node = this.rootNode;

            for (int i=0; i<str.length(); i++) {
                node = node.childNode.getOrDefault(str.charAt(i), null);

                if (node == null) {
                    return false;
                }
            }

            if (node.terminal) {
                if (node.childNode.isEmpty()) {
                    return false;
                }
            }

            return node.terminal;
        }
    }
}