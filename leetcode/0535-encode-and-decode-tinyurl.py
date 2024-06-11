class Codec:

    def __init__(self):
        self.db = {}
        self.db_i = {}
        self.last_key = 0

    def encode(self, longUrl: str) -> str:
        """Encodes a URL to a shortened URL.
        """
        if longUrl in self.db:
            return self.db[longUrl]
        self.last_key += 1 
        self.db[longUrl] = self.last_key
        self.db_i[self.last_key] = longUrl

        return self.last_key

    def decode(self, shortUrl: str) -> str:
        """Decodes a shortened URL to its original URL.
        """

        return self.db_i[self.last_key]
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))