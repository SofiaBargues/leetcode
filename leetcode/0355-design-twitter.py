from collections import defaultdict
from heapq import heapify, heappop, heappush
class Twitter:

    def __init__(self):
        self.followGraph: Dict[int, Set[int]] = defaultdict(set)
        self.tweets: Dict[int, List[Tupple[int, int]]] = defaultdict(list)
        self.snowflake = 0

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets[userId].append((tweetId, self.snowflake))
        self.snowflake+=1


    def getNewsFeed(self, userId: int) -> List[int]:
        users = [(-self.tweets[follow][-1][1], follow) for follow in self.followGraph[userId] if self.tweets[follow]]
        heapify(users)
        if self.tweets[userId]:
            heappush(users, (-self.tweets[userId][-1][1], userId))
        top_10_users = [heappop(users)[1] for _ in range(min(10, len(users)))]

        top_100_tweets = []
        for top_u in top_10_users:
             top_100_tweets.extend([(-tweet[1], tweet[0]) for tweet in self.tweets[top_u][-10:]])
        heapify(top_100_tweets)
        feed = [heappop(top_100_tweets)[1] for _ in range(min(10, len(top_100_tweets)))]
        return feed

    def follow(self, followerId: int, followeeId: int) -> None:
        self.followGraph[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.followGraph[followerId]:
          self.followGraph[followerId].remove(followeeId)



# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)