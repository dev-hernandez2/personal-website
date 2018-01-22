import Feed  from 'rss-to-json';


export const mediumRssJson = Feed.load('https://medium.com/feed/@bryantaxs', function(err, rss){
    return rss;
});

